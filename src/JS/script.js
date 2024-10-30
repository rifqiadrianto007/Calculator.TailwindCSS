const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const operator = ["C", "( )", "%", "÷", "x", "-", "+", "="];
let output = ""; 

const calculate = (btnValue) => {
    console.log("Tombol ditekan:", btnValue);
    
    if (btnValue === "=" && output !== "") {
        try {
            output = eval(output.replace("÷", "/").replace("x", "*").replace("%", "/100"));
        } catch (error) {
            output = "Error";
        }
    }
    else if (btnValue === "C") {
        output = "";
    }
    else {
        if (output === "" && operator.includes(btnValue)) return;

        output += btnValue;
    }

    console.log("Output sekarang:", output);

    display.value = output;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});
