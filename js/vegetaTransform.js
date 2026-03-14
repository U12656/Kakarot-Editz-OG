let form = 0;

let forms = [

{
name:"Base Form",
img:"images/vegeta-base.jpg"
},

{
name:"Super Saiyan",
img:"images/vegeta-ssj.jpg"
},

{
name:"Super Saiyan 2",
img:"images/vegeta-ssj2.jpg"
},

{
name:"Super Saiyan 3",
img:"images/vegeta-ssj3.jpg"
},

{
name:"Super Saiyan God",
img:"images/vegeta-god.jpg"
},

{
name:"Super Saiyan Blue",
img:"images/vegeta-blue.jpg"
},

{
name:"Super Saiyan Blue Evolved",
img:"images/vegeta-blue-evolved.jpg"
},

{
name:"Ultra Ego",
img:"images/vegeta-ultra-ego.jpg"
}

];

function transformVegeta(){

form++;

if(form >= forms.length){
form = 0;
}

document.getElementById("vegetaImg").src = forms[form].img;

document.getElementById("formName").innerText = forms[form].name;

}