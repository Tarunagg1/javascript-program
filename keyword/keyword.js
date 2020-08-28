const keyword = {
    elemnts: {
        main: null,
        keycontainer: null,
        keys: []
    },

    eventshandler: {
        oninput:null,
        onclose:null
    },

    properties: {
        value: "",
        capslock: false
    },

    init(){
        this.elemnts.main = document.createElement("div")
        this.elemnts.keycontainer = document.createElement("div")

        ////////////////////// setup
        this.elemnts.main.classList.add("keyboard");
        this.elemnts.keycontainer.classList.add("keyboard_keys");
        this.elemnts.keycontainer.appendChild(this._createkey());

        //////////////////// add to dom
        this.elemnts.main.appendChild(this.elemnts.keycontainer)
        document.body.appendChild(this.elemnts.main);
    },

    _createkey(){
          const fragment = document.createDocumentFragment();
          const keylayout = [
              "1","2","3","4","5","6","7","8","9","0", "backspace",
              "q","w","e","r","t","y","u","i","o","p",
              "caps","a","s","d","f","g","h","j","k","l","enter",
              "done","z","x","c","v","b","n","m",",",".","?",
              "space"
          ];
          ////////////////////// creater html fro icon
          const createicon = (icon_name) => {
                    return `<i class="material-icons">${icon_name}</i>`;
          }

          keylayout.forEach(key =>{
              const keyelement = document.createElement("button")
              const insertlinebreak = ['backspace',"p","enter","?"].indexOf(key) !== -1;

              //////////////////// addd attributes and classes 
              keyelement.setAttribute("type","button");
              keyelement.classList.add("keyboard_key");
              
              switch(key){
                  case "backspace":
                      keyelement.classList.add("keyboard_key-wide");
                      keyelement.innerHTML = createicon("backspace");
                      keyelement.addEventListener('click',function(){
                          this.propertie.value = this.properties.value.substring(0,this.properties.value.length = -1);
                          this._trigerevent("oninput")
                      })
                      break;

                      case "caps":
                        keyelement.classList.add("keyboard_key-wide","keyboard-key-activetable");
                        keyelement.innerHTML = createicon("keyboard_capslock");
                        keyelement.addEventListener('click',function(){
                            this._togglecapslock;
                            keyelement.classList.toggle("keyboard-key-active",this.properties.capslock);
                        })
                    break;
                    case "caps":
                        keyelement.classList.add("keyboard_key-wide");
                        keyelement.innerHTML = createicon("keyboard_return");
                        keyelement.addEventListener('click',function(){
                            this.properties.value = "\n"
                            this._trigerevent("oninput")
                        })
                    break;
                    case "space":
                        keyelement.classList.add("keyboard_key-extrawide");
                        keyelement.innerHTML = createicon("space_bar");
                        keyelement.addEventListener('click',function(){
                            this.properties.value += " ";
                            this._trigerevent("oninput")
                        })
                    break;
                    case "done":
                        keyelement.classList.add("keyboard_key-wide","keyboard-key-dark");
                        keyelement.innerHTML = createicon("check_circle");
                        keyelement.addEventListener('click',function(){
                            this.onclose();
                            this._trigerevent("onclose")
                        })
                    break;
                default:
                    keyelement.textContent = key.toLowerCase();
                    keyelement.addEventListener('click',function(){
                        this.properties.value += this.capslock ? key.toLocaleUpperCase() : key.toLocaleLowerCase();
                        this._trigerevent("oninput")
                    })
              }
              fragment.appendChild(keyelement);
              if(insertlinebreak){
                  fragment.appendChild(document.createElement("br"));
              }
          })
          return fragment;
    },

    _trigerevent(handelevent){
        console.log('evrnt triggered eventname'+this.handelevent);
    },

    _togglecapslock(){

    },

    open(initialvalur , oninput, onclose){

    },

    close(){

    }
};

window.addEventListener("DOMContentLoaded", function(){
    keyword.init();
})