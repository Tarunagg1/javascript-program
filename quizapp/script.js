startbtn = document.getElementById("start-btn")
startbtn.addEventListener("click",startgame)
questioncontainer = document.getElementById("question-container");

const questionelement = document.getElementById("question");

const nextbtn = document.getElementById("next-btn");

const ansbtnelement = document.getElementById("ans-btn");

let questionsuffel = 0, curretnquestionindex = 0;

nextbtn.addEventListener("click",()=>{
    curretnquestionindex++;
    setnextqus();  
})

function startgame(){
    resetstate()
    startbtn.classList.add("hide")
    questionsuffel = question.sort(()=> Math.random() - .5)
    questioncontainer.classList.remove("hide")
    setnextqus()
}
function setnextqus(){
   showquestion(questionsuffel[curretnquestionindex]);
}

function showquestion(question){
    questionelement.innerText = question.question;   
    question.answer.forEach(answer => {
        let button = document.createElement('button');
        button.innerText = answer.text
        button.classList.add("btn")
        if(answer.correct){
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click',selectanswer)
        ansbtnelement.appendChild(button) 
    });
}
function resetstate(){
    nextbtn.classList.add("hide");
    while (ansbtnelement.firstChild) {
        ansbtnelement.removeChild
        (ansbtnelement.firstChild)
    }
}
 
function selectanswer(e){
   const selectbtn = e.target
   const correct = selectbtn.dataset.correct
   setstatusclass(document.body,correct)
   Array.from(ansbtnelement.children).forEach(button => {
       setstatusclass(button,button.dataset.correct)
   })
   if(questionsuffel.length > curretnquestionindex + 1){
       nextbtn.classList.remove("hide")
   }else{
         startbtn.innerText = "Restart Agein";
         startbtn.classList.remove("hide")
   }
}

function setstatusclass(element,correct){
    clearstatusclass(element);
    if(correct){
        element.classList.add("correct")
    }else{
        element.classList.add("wrong")
    }

}

function clearstatusclass(ele){
    ele.classList.remove("correct")
    ele.classList.remove("wrong")
}

const question = [
    {
        question: "What is 2+2",
        answer:[
            {text : '4', correct:true},
            {text : '94', correct:false},
            {text : '5', correct:false},
            {text : '8', correct:false}
        ]
    },
    {
        question: "php is language",
        answer:[
            {text : 'Yes', correct:true},
            {text : 'No', correct:false},
            {text : 'Somthing', correct:false},
            {text : 'None', correct:false}
        ]
    },
    
]