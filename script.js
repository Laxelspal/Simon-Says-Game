let gameSeq=[];
let userSeq=[];
let highScore=0;

let start=false;
let level=0;
let colors=["green","red","blue","yellow"];

let h2= document.querySelector("h2");
let play=document.querySelector(".circle");

play.addEventListener("click",function(){
    if(start==false){
        start=true;
        console.log("Game is Started");
        levelUp();
    }
})
let audio1=new Audio("lLove_cheep.mp3");

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;
    let ranIdx= Math.floor(Math.random()*4);
    let rancolor=colors[ranIdx];
    let btn=document.querySelector(`.${rancolor}`);
    flashbtn(btn);
    gameSeq.push(rancolor);
    audio1.play();
    userSeq=[];
    console.log("GameSeq:",gameSeq);
}

while(start==true){
    audio1.play();
}


function  flashbtn(btn){
    btn.classList.add('flash');
    setTimeout(function (){
        btn.classList.remove("flash");
    },200);
}
function  userflash(btn){
    btn.classList.add('userflash');
    setTimeout(function (){
        btn.classList.remove("userflash");
    },200);
}

let allbtns= document.querySelectorAll('.btn');

for( btn1 of allbtns){
    btn1.addEventListener('click',btnpress)
}

function btnpress(){
    let btn=this;
    let color=btn.getAttribute('id');
    userSeq.push(color);
    userflash(this);
    console.log("userSeq: ",userSeq);
    checkAns(userSeq.length-1);
}

function checkAns(curr){
    if(gameSeq[curr]==userSeq[curr]){
        if(gameSeq.length==userSeq.length){
            levelUp();
        }
    
    }
    else{
        let audio= new Audio("warning.mp3");
        audio.play();
        h2.innerHTML=`Game Over ! Your score is ${level} <br>`;
        reset();
    }
}

function reset(){
    if(highScore<level){
        let hs= document.querySelector("#high_score");
        hs.innerHTML=`High Score is : ${level}`;
    }
    level=0;
    gameSeq=[];
    userSeq=[];
    start=false;
    audio1.pause();
    
    document.querySelector("body").style.backgroundColor="#ff0000";
    setTimeout(function(){
        document.querySelector("body").style.backgroundColor='#1F232C';
    },100);

}







