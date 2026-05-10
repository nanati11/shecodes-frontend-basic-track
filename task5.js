// --- 1. Greet the User ---
let name = prompt("What is your name?");
alert("Hello, " + name + "! It is nice to meet you.");

// --- 2. Check Even or Odd ---
let userNumber = prompt("Enter a number to see if it is even or odd:");
let checkNum = Number(userNumber);

if (checkNum % 2 === 0) {
    alert(checkNum + " is an even number.");
} else {
    alert(checkNum + " is an odd number.");
}

// --- 3. Basic Calculator ---
let firstNum = Number(prompt("Calculator: Enter your first number:"));
let secondNum = Number(prompt("Calculator: Enter your second number:"));
let choice = prompt("Choose an operation: +, -, *, /");

let finalResult;

if (choice === "+") {
    finalResult = firstNum + secondNum;
} else if (choice === "-") {
    finalResult = firstNum - secondNum;
} else if (choice === "*") {
    finalResult = firstNum * secondNum;
} else if (choice === "/") {
    // Basic check to prevent dividing by zero
    if (secondNum === 0) {
        finalResult = "Error (Cannot divide by zero)";
    } else {
        finalResult = firstNum / secondNum;
    }
} else {
    finalResult = "Invalid operation";
}

alert("The result of your calculation is: " + finalResult);