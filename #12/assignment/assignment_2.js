function calculate (firstNum, secondNum, operation="add") {
    let result = 0;
    typeof secondNum === "undefined" ? secondNum = 0: secondNum = secondNum;
    operation === "add"
    ? result = firstNum+secondNum
    : operation === "multiply"
    ? result = firstNum * secondNum
    : result = firstNum - secondNum;

    console.log(result);
}

calculate(20);
calculate(20, 30, );
calculate(20, 30, "add");
calculate(20, 30, "subtract");
calculate(20, 30, "multiply");
