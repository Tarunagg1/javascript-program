const score = document.querySelector('.score');
const startscreen = document.querySelector(".startsceen")
const gamearea = document.querySelector(".gamearea")
document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
startscreen.addEventListener("click", start)

let keys = { ArrowUp: false, ArrowLeft: false, ArrowRight: false, ArrowDown: false };
let player = { speed: 5,score:0 };

function keyDown(e) {
    keys[e.key] = true;
    e.preventDefault();
}
function keyUp(e) {
    keys[e.key] = false;
    e.preventDefault();
}

function iscollied(a,b){
    arect = a.getBoundingClientRect();
    brect = b.getBoundingClientRect();

    return !((arect.bottom < brect.top) || (arect.top > brect.bottom) || (arect.right < brect.left ) || (arect.left > brect.right));
}

function moveline(){
    let lines = document.querySelectorAll('.lines');
    lines.forEach(function(item){
        if(item.y >= 800){
            item.y -= 800
        }
        item.y += player.speed
        item.style.top = item.y + "px";
    })
}

function endgame(){
    player.start = false
    startscreen.classList.remove("hide");
    startscreen.innerHTML =    `Game is Over <br> your final score is ${player.score} <br> Presss here to start again`;
}

function moveenemy(car){
    let enemy = document.querySelectorAll('.enemycar');
    enemy.forEach(function(item){
        if(iscollied(car,item)){
            endgame();
        }
        if(item.y >= 800){
            item.y = -300
            item.style.left = Math.floor(Math.random() * 350) + "px";
        }
        item.y += player.speed
        item.style.top = item.y + "px";
    })
}

function gameplay() {
    const car = document.querySelector(".car")
    roadsize = gamearea.getBoundingClientRect();
    moveline();
    moveenemy(car);
    if (player.start) {
        if (keys.ArrowUp && player.y > (roadsize.top+ 100) ) {
            player.y -= player.speed;
        }
        if (keys.ArrowDown && player.y< (roadsize.bottom - 100)) {
            player.y += player.speed;
        }
        if (keys.ArrowLeft && player.x >0) {
            player.x -= player.speed;
        }
        if (keys.ArrowRight && player.x<(roadsize.width - 100)) {
            player.x += player.speed;
        }
        car.style.top = player.y + "px";
        car.style.left = player.x + "px";
        window.requestAnimationFrame(gameplay);
        player.score++;
        score.innerHTML = "Score: "+ player.score;
    }

}


function randomcolor(){
    function c(){
        let hex = Math.floor(Math.random() * 255).toString(16);
        return ("0"+String(hex)).substr(-2);
    }
    let s = "#"+c()+c()+c();
    console.log(s);
    return s
}

function start() {
    // gamearea.classList.remove("hide");
    startscreen.classList.add("hide");
    score.classList.remove("hide");
    gamearea.innerHTML = ""
    
    player.start = true;
    player.score = 0;
    window.requestAnimationFrame(gameplay);
    let car = document.createElement("div");
    car.setAttribute("class", "car");
    gamearea.appendChild(car);
    
    for(i=0; i<=5; i++){
         let roadline = document.createElement("div");
         roadline.setAttribute("class","lines");
         roadline.y = (i*150)
         roadline.style.top = roadline.y + "px";
         gamearea.appendChild(roadline);
    }
   
    for(i=0; i<3; i++){
        let enemycar = document.createElement("div");
        enemycar.setAttribute("class","enemycar");
        enemycar.y = ((i+1) * 350) * -1;
        enemycar.style.top = enemycar.y + "px";
        enemycar.style.background = randomcolor();
        enemycar.style.left = Math.floor(Math.random() * 350) + "px";
        gamearea.appendChild(enemycar);
   }
    player.x = car.offsetLeft;
    player.y = car.offsetTop;
}












