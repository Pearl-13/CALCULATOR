console.log("my code is running");
let currentInput = "";
let previousInput = "";
let operator = null;
const operatorbtn =
document.querySelectorAll(".operator");
let numberbtn= 
document.querySelectorAll(".number");
const equalToSign =
document.getElementById("equals");
let result =
document.getElementById("result");
const percent =
document.getElementById("percent");
numberbtn.forEach((btn) => {
    btn.addEventListener("click", () => {
        result.value += btn.textContent
    })
    
});

operatorbtn.forEach((operatorButton) => {
    operatorButton.addEventListener("click", () => {
        result.value += operatorButton.textContent
    })
});

function insert(value) {
    if (value === "CLEAR") {
        result.value = "";
    } 
if (value === "%") {
        result.value = 
eval(result.value/100);
    } 
 
    else if (value === "DELETE") {
        result.value = 
        result.value.slice(0,-1);
    }
    else if (value === "=") {
        try {let expression = result.value; 
expression = expression.replace(/π/g, "Math.PI");
            result.value =
            eval(expression);
        } catch {
            result.value = "SYNTAX ERROR"
        }
    }
   

}
function evaluateSign() {
    let input = result.value;
    input = 
    input.replace(/%/g, "/100");
    input =
    input.replace(/×/g, "*");
    input = 
    input.replace(/⊼/g, "3.142");
    try {
        let result = eval(input);
        result.value = result;
    } catch (e) {
        result.value = "SYNTAX ERROR";
    }
}
