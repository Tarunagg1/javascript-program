let dur =  document.getElementById("duration");
let isplaying = false;

const songs = [
    {
        name: "m1",
        title: "ye dua hai meri rab se",
        artist: "okiuh",
    },
    {
        name: "m2",
        title: "ye dua hai meri rab se",
        artist: "okii9uuh",
    },
    {
        name: "m3",
        title: "ye dua hai meri rab se",
        artist: "okoiuhyiuh",
    },
    {
        name: "m4",
        title: "ye dua hai meri rab se",
        artist: "okiiuyuh",
    },
    {
        name: "m5",
        title: "ye dua hai meri rab se",
        artist: "okioiuuh",
    }
]
songindex = 0;

const loadsong = (songs) => {
    title.textContent = songs.title;
    singer.textContent = songs.artist;
    audio.src = "music/" + songs.name + ".mp3";
};

play.addEventListener('click', () => {
    if (isplaying) {
        isplaying = false;
        audio.pause();
        play.classList.replace("fa-pause", "fa-play")
        image.classList.remove("anime")
    } else {
        loadsong(songs[songindex]);
        isplaying = true;
        audio.play();
        play.classList.replace("fa-play", "fa-pause")
        image.classList.add("anime")
    }

})

const nextsong = () => {
    songindex = (songindex + 1) % songs.length;
    loadsong(songs[songindex]);
    isplaying = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause")
    image.classList.add("anime")
}
const prevsong = () => {
    songindex = (songindex - 1 + songs.length) % songs.length;
    loadsong(songs[songindex]);
    isplaying = true;
    audio.play();
    play.classList.replace("fa-play", "fa-pause")
    image.classList.add("anime")
}

// progress js work
audio.addEventListener('timeupdate',(event =>{
    const {duration,currentTime} = event.srcElement;
    protime = (currentTime / duration) * 100;
    progress.style.width = protime + "%";
    let mindur = Math.floor(duration / 60);
    let secdur = Math.floor(duration % 100);
    if(duration){
        dur.textContent = `${mindur}:${secdur}`;
    }

    // current time 
    let mincur = Math.floor(currentTime / 60);
    let seccur = Math.floor(currentTime % 100);
    if(seccur < 10){
        seccur = `0${seccur}`;
    }
    if(currentTime){
        curentd.textContent = `${mincur}:${seccur}`;
    }
}))

progressdiv.addEventListener("click",(event)=>{
    if(isplaying){
        const {duration} = audio;
        let moveprogress = event.offsetX / event.srcElement.clientWidth * duration;
        audio.currentTime = moveprogress;
    }
})

audio.addEventListener("ended",nextsong);

next.addEventListener('click', nextsong);
prev.addEventListener('click', prevsong);