let userscore = 0;
let compscore = 0;

const user_score_span = document.getElementById('user-score');
const comp_score_span = document.getElementById('comp-score');
const score_bord_div = document.querySelector('.score-board');
const result_bord_p = document.querySelector('.result > p');

const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissore_div = document.getElementById('s');

function converthumen(letter){
    if(letter == 'r') return "Rock";
    if(letter == 'p') return "Paper";
    return "Scissors"
}

function Wins(user,comp){
   userscore++;
   user_score_span.innerHTML = userscore;
   const smalluserword = "user".fontsize(3).sub();
   const smallcompword = "comp".fontsize(3).sub();
   result_bord_p.innerHTML = `${converthumen(user)}${smalluserword}  Beats to ${converthumen(comp)}${smallcompword }  user Wins!!`;
//    document.getElementById(user).children.classList.add('green-glow');
}
function loose(user,comp){
   compscore++;
   comp_score_span. innerHTML = compscore;
   const smalluserword = "user".fontsize(3).sub();
   const smallcompword = "comp".fontsize(3).sub();
   result_bord_p.innerHTML = `${converthumen(user)}${smalluserword}  loses to ${converthumen(comp)}${smallcompword } You loose...!!`;
}
function draw(user,comp){
    const smalluserword = "user".fontsize(3).sub();
    const smallcompword = "comp".fontsize(3).sub();
    result_bord_p.innerHTML = `${converthumen(user)}${smalluserword}  Equals ${converthumen(comp)}${smallcompword }  It's Draw !!`;
}

function getcompchoice(){
     const choices = ['r','p','s'];
     const rand_num = Math.floor(Math.random() * 3)
     return choices[rand_num];   
}

function game(userchoice){
   const comp_choice = getcompchoice();
   switch (userchoice + comp_choice){
       case "rs":
       case "pr":
       case "sp":
           Wins(userchoice,comp_choice);
           break;
       case "rp":
       case "ps":
       case "sr":
        loose(userchoice,comp_choice);
        break;
        case "rr":
        case "pp":
        case "ss":
          draw(userchoice,comp_choice);
             break;           
   }
}

function main(){
rock_div.addEventListener('click',function(){
    game("r");
});

paper_div.addEventListener('click',function(){
    game("p");
});
scissore_div.addEventListener('click',function(){
    game("s");
});
}

main();
