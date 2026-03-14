
function checkQuiz(){

let score = 0;

let answers = document.querySelectorAll("input[type=radio]:checked");

answers.forEach(ans=>{
score += Number(ans.value);
});

let result = document.getElementById("result");

result.innerText = "Your Score: " + score + " / 5";

}