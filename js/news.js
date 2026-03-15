let news = JSON.parse(localStorage.getItem("dbnews")) || [];

function addNews(){

let title = document.getElementById("newsTitle").value;
let text = document.getElementById("newsText").value;
let img = document.getElementById("newsImage").value;

if(!title || !text){
alert("Enter title and news");
return;
}

news.unshift({
title:title,
text:text,
img:img
});

localStorage.setItem("dbnews", JSON.stringify(news));

showNews();

}

function showNews(){

let container = document.getElementById("newsList");

container.innerHTML="";

news.forEach(n => {

let div = document.createElement("div");

div.className="news-card";

div.innerHTML = `

<h3>${n.title}</h3>

${n.img ? `<img src="images/${n.img}">` : ""}

<p>${n.text}</p>

`;

container.appendChild(div);

});

}

document.addEventListener("DOMContentLoaded", showNews);