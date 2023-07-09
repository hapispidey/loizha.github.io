let firstNumber = document.getElementById("firstNum");
let secondNumber = document.getElementById("secNum");

let calculateBtn = document.getElementById("calculateBtn");
let result = document.getElementById("result");

calculateBtn.addEventListener("click", addition);


function addition() {
    let num1 = firstNumber.value;
    let num2 = secondNumber.value;
    let answer = parseInt(num1) + parseInt(num2);
    result.innerText = answer;
}