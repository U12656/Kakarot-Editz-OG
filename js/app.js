

// community board

function postMessage(){

let name=document.getElementById("name").value
let msg=document.getElementById("msg").value

let board=document.getElementById("board")

let li=document.createElement("li")

li.innerText=name+": "+msg

board.appendChild(li)

}


// voting

function vote(){

let options=document.getElementsByName("vote")

for(let o of options){

if(o.checked){

document.getElementById("result").innerText=
"You voted for "+o.value

}

}

}


// chat system

function sendChat(){

let user=document.getElementById("user").value
let msg=document.getElementById("chatmsg").value

let chatbox=document.getElementById("chatbox")

let li=document.createElement("li")

li.innerText=user+": "+msg

chatbox.appendChild(li)

}


// search videos

function searchVideos(){

let input=document.getElementById("search").value.toLowerCase()

let videos=document.querySelectorAll(".video-grid iframe")

videos.forEach(v=>{

if(v.src.toLowerCase().includes(input)){

v.style.display="block"

}else{

v.style.display="none"

}

})

}


// small scroll animation

window.addEventListener("scroll",()=>{

let cards=document.querySelectorAll(".feature")

cards.forEach(card=>{

card.style.transform="translateY(-5px)"

})

})


// power scanner

function scanPower(){

let c=document.getElementById("character").value.toLowerCase()

let powers={

"goku":"9000+",
"goku ssj":"150 million",
"goku ssj2":"3 billion",
"goku ssj3":"24 billion",
"goku ssj god":"60 billion",
"goku ssj blue":"10 trillion",
"goku ultra instinct":"100 trillion",

"vegeta":"8500",
"vegeta ssj":"140 million",
"vegeta ssj2":"2 billion",
"vegeta ssj blue":"9 trillion",
"vegeta ultra ego":"95 trillion",

"gohan":"8000",
"gohan ssj":"120 million",
"gohan ssj2":"2.5 billion",
"ultimate gohan":"15 trillion",
"gohan beast":"120 trillion",

"piccolo":"3500",
"orange piccolo":"70 trillion",

"krillin":"1770",
"yamcha":"1480",
"tien":"1830",
"master roshi":"139",

"frieza":"530000",
"final form frieza":"120 million",
"golden frieza":"80 trillion",
"black frieza":"200 trillion",

"cell":"900 million",
"perfect cell":"1 billion",

"majin buu":"600 million",
"super buu":"1 billion",
"kid buu":"700 million",

"broly":"10000",
"legendary broly":"90 trillion",

"jiren":"85 trillion",
"toppo":"40 trillion",
"hit":"30 trillion",

"beerus":"infinite",
"whis":"infinite+",

"zamasu":"5 trillion",
"fused zamasu":"50 trillion",

"goku black":"15 trillion",
"rose goku black":"60 trillion",

"trunks":"5000",
"future trunks ssj":"3 billion",

"android 17":"20 trillion",
"android 18":"1 billion",
"android 16":"900 million",

"raditz":"1500",
"nappa":"4000",

"bardock":"10000",

"cabba":"2 billion",
"caulifla":"30 trillion",
"kale":"50 trillion",

"dyspo":"25 trillion",

"grand priest":"infinite+++",
"zeno":"unknown (omnipotent)"

}

document.getElementById("power").innerText="Scanning..."

setTimeout(function(){

let power=powers[c]

if(power){

document.getElementById("power").innerText="Power Level: "+power

}else{

document.getElementById("power").innerText="No reading detected"

}

},2000)

}


// saiyan transform

let form=0

let forms=[
{
name:"Base Form",
img:"images/goku-base.jpg"
},
{
name:"Super Saiyan",
img:"images/goku-ssj.jpg"
},
{
name:"Super Saiyan 2",
img:"images/goku-ssj2.jpg"
},
{
name:"Super Saiyan 3",
img:"images/goku-ssj3.jpg"
},
{
name:"Super Saiyan God",
img:"images/goku-god.jpg"
},
{
name:"Super Saiyan Blue",
img:"images/goku-blue.jpg"
},
{
name:"Ultra Instinct",
img:"images/goku-ui.jpg"
}
]

function transform(){

form++

if(form>=forms.length){
form=0
}

document.getElementById("gokuImg").src=forms[form].img
document.getElementById("formName").innerText=forms[form].name

}


// NEW LEADERBOARD SYSTEM (names + optional channel)

let fans = JSON.parse(localStorage.getItem("fans")) || [];

function addFan(){

const name = document.getElementById("fanName").value.trim();
const channel = document.getElementById("fanChannel").value.trim();

if(!name){
alert("Enter your name");
return;
}

/* RESET AFTER 100 FANS */
if(fans.length >= 100){
fans = [];
localStorage.removeItem("fans");
alert("Leaderboard reset! New tournament begins!");
}

fans.push({
name:name,
channel:channel
});

localStorage.setItem("fans", JSON.stringify(fans));

showFans();

document.getElementById("fanName").value="";
document.getElementById("fanChannel").value="";

}


function showFans(){

const list=document.getElementById("fanList");

if(!list) return;

list.innerHTML="";

fans.forEach(function(fan){

let li=document.createElement("li");

if(fan.channel){

li.textContent = fan.name + " (Channel: " + fan.channel + ")";

}else{

li.textContent = fan.name;

}

list.appendChild(li);

});

}

document.addEventListener("DOMContentLoaded", showFans);




