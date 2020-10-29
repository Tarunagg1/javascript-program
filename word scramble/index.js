let isplay = false;
let newword;
let randomword;
let pword = ['JavaScript','Java','Python','Rails','Ruby','C++','android','ajax','jquery','kotlin','swift','c#','html','css','mongodb','sql','databse'];

const createword = ()=>{
    let rennum = Math.floor(Math.random() * pword.length);
    let newgessword = pword[rennum];
    return newgessword;
}

const scrambleword = (word)=>{
      arr = word.split("");
      for(let i=arr.length-1; i>0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;        
      }
      return arr;  
}

btn.addEventListener('click',()=>{
    if(!isplay){
        isplay = true;
        btn.innerHTML = "Guess"
        guess.classList.toggle('hidden');
        newword = createword();
        randomword = scrambleword(newword)
        randomword = randomword.join("");
        console.log("oiuhy");
        msg.innerHTML = `Guess the word ${randomword}`;
    }else{
        console.log("koiuhgy");
        let userword = guess.value;
        if(userword === newword){
            isplay = false;
            msg.innerHTML = `Awesome!!! it's correct it is ${newword}`; 
            btn.innerHTML = "Start Again"
            guess.classList.toggle('hidden');
            guess.value = "";
        }else{
            msg.innerHTML = `Ohh Snap!! it's not correct try again word is ${randomword}`;
        }
    }
})