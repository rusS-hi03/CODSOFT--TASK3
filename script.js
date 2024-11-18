
// JavaScript to handle calculator logic
const display = document.getElementById("display");
let currentInput = "";
let previousInput = "";
let operator = "";

document.querySelectorAll(".operator").forEach(operatorButton => {
    operatorButton.addEventListener("click", () => {
        // Visual feedback for operator button
        operatorButton.style.backgroundColor = "#ffa726"; // Active color
        setTimeout(() => {
            operatorButton.style.backgroundColor = "#ffab00"; // Revert after click
        }, 200);
    });
});


document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "C") {
            currentInput = "";
            previousInput = "";
            operator = "";
            display.textContent = "0";
        } else if (value === "=") {
            if (operator && previousInput) {
                currentInput = eval(`${previousInput}${operator}${currentInput}`);
                display.textContent = currentInput;
                operator = "";
                previousInput = "";
            }
        } else if (["+", "-", "*", "/"].includes(value)) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        } else {
            currentInput += value;
            display.textContent = currentInput;
        }
    });
});
