//////////////////////////////////////////// encryption
let plaintextfile, encryptedfile;
let enckeydata="", deckey;

// 0123456789abcdefghijklmnopqrstuvwxyz

const encryption = (str,num)=>{
    let lowercase = str.toLowerCase();
    let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789'.split('');
    let newstr = '';
    for(i=0; i<lowercase.length; i++){
        if(lowercase[i] === ' '){
            newstr += lowercase[i];
            continue;
        }
        let curreanindex = alphabet.indexOf(lowercase[i]);
        let newindex = curreanindex+num;
        if(newindex>25) newindex + newindex-26;
        if(newindex<0) newindex = newindex + 26;
        if(str[i] === str[i].toUpperCase()){
            newstr += alphabet[newindex].toUpperCase();
        }else{
            newstr += alphabet[newindex];
        }
    }
}


$('#encloadfile').click(() => {
    $("#encfile").click();
})

$('#enckeyfileload').click(() => {
    $("#enckey").click();
})

$("#reset").click(() => {
    $("#encplaintext").val("");
    $("#enctextdata").val("");
})

encfile.addEventListener('change', () => {
    let files = encfile.files;
    const file = files[0];
    if (files.length == 0) return;
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        let lines = file.split(/\r\n|\n/);
        $("#encplaintext").val(lines.join('\n'))
    }
    reader.readAsText(file)
})


enckey = document.getElementById("enckey");
enckey.addEventListener('change', () => {
    let files = enckey.files;
    const file = files[0];
    if (files.length == 0) return;
    let reader = new FileReader();
    reader.onload = (e) => {
        const file = e.target.result;
        enckeydata = file;
    }
    reader.readAsText(file)
})

$("#encrypt").click(() => {
    plaintext = $("#encplaintext").val();
    if (plaintext == "") {
        alert("upload or enter some text")
    } else {
        if(enckeydata == ""){
            alert("key file is not uploded")
        }else{
            alert("plode")
        }
    }
})


$("#saveenc").click(() => {
    data = $("#enctextdata").val();
    if (data == "") {
        alert("data not avilable")
    } else {
        const textToBLOB = new Blob([data], { type: 'text/plain' });
        const sFileName = 'EncData.txt';	   // The file to save the data.

        let newLink = document.createElement("a");
        newLink.download = sFileName;

        if (window.webkitURL != null) {
            newLink.href = window.webkitURL.createObjectURL(textToBLOB);
        }
        else {
            newLink.href = window.URL.createObjectURL(textToBLOB);
            newLink.style.display = "none";
            document.body.appendChild(newLink);
        }

        newLink.click();
    }
})

//////////////////////////////////////// encryption end