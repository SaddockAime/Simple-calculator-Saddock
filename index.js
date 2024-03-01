function calculate() {
    try {
        var expression = document.forms[0].display.value;
        var num1 = parseFloat(expression.split(/[\+\-\*\/]/)[0]);
        var operator = expression.split(/[\d\.]+/).find(e => e);
        var num2 = parseFloat(expression.split(/[\+\-\*\/]/)[1]);
        var result;
        switch(operator) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if(num2 !== 0){
                    result = num1 / num2;
                } else {
                    throw "Division by zero error";
                }
                break;
            default:
                throw "Invalid operator";
        }
        document.forms[0].display.value = result;
    } catch (error) {
        document.forms[0].display.value = 'Error';
    }
}