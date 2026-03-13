document.addEventListener("DOMContentLoaded", function(){

const gameArea = document.getElementById("gameArea");
let collected = 0;

for(let i=1;i<=7;i++){

let ball = document.createElement("img");

ball.src = "images/db"+i+".png";
ball.className = "dragonball";

ball.style.top = Math.random()*400 + "px";
ball.style.left = Math.random()*600 + "px";

ball.addEventListener("click", function(){

ball.remove();

collected++;

if(collected === 7){

summonShenron();

}

});

gameArea.appendChild(ball);

}

});

function summonShenron(){

document.body.classList.add("flash");

setTimeout(function(){

document.body.classList.remove("flash");

const shenronArea = document.getElementById("shenronArea");

if(shenronArea){
shenronArea.style.display = "block";
}

},500);

}

