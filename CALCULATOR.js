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
    if (value === "⊼") {
        result.value += "⊼";
    }
    if (value === "cos") {
        result.value += "cos";
    }
     if (value === "sin") {
        result.value += "sin";
    }
     if (value === "tan") {
        result.value += "tan";
    }
     if (value === "log") {
        result.value += "log";
    }

    else if (value === "DELETE") {
        result.value = 
        result.value.slice(0,-1);
    }
    
    else if ( value === "=") {
        try {
            let expression = result.value;
            expression = expression.replace(/⊼/g, "Math.PI");
            expression = expression.replace(/cos/g, "Math.cos(");
            expression = expression.replace(/sin/g, "Math.sin(");
            expression = expression.replace(/tan/g, "Math.tan(");
            expression = expression.replace(/log/g, "Math.log(");
            result.value =
            eval(expression);
        } catch {
            result.value = "SYNTAX ERROR";
        }
   } 
   
    
}
 
   
  
