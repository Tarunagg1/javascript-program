const api = {
    key : "b2e8a11f1f1eb5b9cf630d523bea3764",
    base_url : "https://samples.openweathermap.org/data/2.5/"
}

const serchbox = document.querySelector('.serch-box');
serchbox.addEventListener('keypress',setquery);

function setquery(evt){
   if(evt.keyCode == 13){
       getresult(serchbox.value)
   }
}

function getresult(query){
   fetch(`${api.base_url}weather?q=${query}&appid=${api.key}`)
   .then(weather =>{
       return weather.json();
   }).then(displayresult)
}


function displayresult(wheather){    
    document.querySelector('.location .city').innerText = `${wheather.name} , ${wheather.sys.country}`;
    let now = new Date();
    document.querySelector('.location .date').innerText = dateBuilder(now)
    document.querySelector('.current .temp').innerHTML = `${Math.round(wheather.main.temp)}<span>*C</span>`;
    document.querySelector('.current .weather').innerText = `${wheather.weather[0].main}`
    document.querySelector('.current .high-low').innerText = `${wheather.main.temp_min}*C / ${wheather.main.temp_max}`

}

function dateBuilder(now){
    let months = ["jan","feb","mar","apri","may","june","july","aug","sept","oct","nov","dec"]
    let days = ["sunday","monday","tuesday","wednesday","thuresday","friday","saturday"]
    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year = now.getFullYear();
    return `${day} ${date} ${month} ${year}`;
}