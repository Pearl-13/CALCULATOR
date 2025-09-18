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
    else if (value === ".") {
        result.value += ".";
    }
    else if (value === "%") {
        result.value = 
        eval(result.value/100); 
    }
    else if (value === "(") {
        result.value += "(";
    }
    else if (value === ")") {
        result.value += ")";
    }
    else if (value === "⊼") {
        result.value += "⊼";
    }
     else if (value === "cos") {
        result.value += "cos(";
    }
    else if (value === "sin") {
        result.value += "sin(";
    }
    else if (value === "tan") {
        result.value += "tan(";
    }
    else if (value === "log") {
        result.value += "log(";
    }

    else if (value === "DELETE") {
        result.value = 
        result.value.slice(0,-1);
    }
    
    else if ( value === "=") {
        try {
            let expression = result.value;
            expression = expression.replace(/⊼/g, "Math.PI");
            expression =
             expression.replace(/cos\((.*?)\)/g, (match, p1) =>
                Math.cos(eval(p1) * Math.PI/180));
            expression = expression.replace(/sin\((.*?)\)/g,  (match, p1) =>
                Math.sin(eval(p1) * Math.PI/180));
            expression = expression.replace(/tan\((.*?)\)/g,  (match, p1) =>
                Math.tan(eval(p1) * Math.PI/180));
            expression = expression.replace(/log\((.*?)\)/g,  (match, p1) =>
                Math.log(eval(p1) * Math.PI/180));
            result.value =
            eval(expression).toFixed(4);
        } catch {
            result.value = "SYNTAX ERROR";
        }
   } 
   else{
    result.value += "";
   }
   
    
}
 
   
  
