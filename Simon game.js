let gamerSeq = [];
let userSeq = [];
let btns = ["yellow","red","purple","green"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");
document.addEventListener("keypress",function(){
    if(started == false){
    console.log("game started");
    started == true;
     
    levelUp();
    }
});

function btnFlash(btn){
   btn.classList.add("flash");
    setTimeout(function(){
        btn.classList.remove("flash");
    },250);
}
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `level ${level}`;
    let randmIdx = Math.floor(Math.random()*3);
    let randmcolor = btns[randmIdx];
    let randmbtn = document.querySelector(`.${randmcolor}`);
    gamerSeq.push(randmcolor);
    console.log(gamerSeq);
    btnFlash(randmbtn);
}
function checkAnswer(idx){
  
    if(userSeq[idx] === gamerSeq[idx]){
        if(userSeq.length === gamerSeq.length){
           setTimeout(levelUp(),1000);
        }
    }else{
        h2.innerHTML = `Game over!Your score was <b>${level} </b> <br>Press any to key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor = "white";
        },250);
        reset();
    }
}

function btnPress(){
    let btn = this ;
    btnFlash(btn);
    userColor = btn.getAttribute("id");
    console.log(userColor);
    userSeq.push(userColor);
    checkAnswer(userSeq.length-1);
}

let allbtns = document.querySelectorAll(".btn");
for(btn of allbtns){
      btn.addEventListener("click",btnPress);
}

function reset(){
    started = false;
    gamerSeq = [];
    userSeq = [];
    level = 0;
}