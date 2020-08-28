const btn = document.getElementById("talk");
const content = document.getElementById("content");
const tetx = document.getElementById("text");


const speechrecognation = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognation = new speechrecognation();

recognation.onstart = function(){
    console.log("microphone started");   
}

recognation.onresult = function(event){
    const current = event.resultIndex;
    const tracscript = event.results[current][0].transcript;
    readoutload(tracscript);
    text.text = tracscript;
    content.textContent = tracscript; 
}

btn.addEventListener('click',()=>{
    console.log('btn click');
    recognation.start();
})

function readoutload(msg){
    const speech = new SpeechSynthesisUtterance();
    speech.text = msg;
    speech.volume = 3;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}