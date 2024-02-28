function calculator(num1, num2, operation){
    switch(operation){
        case '+': return num1+num2;
        case '-': return num1-num2;
        case '*': return num1*num2;
        case '/':
            if(num2 !==0){
                return num1/num2;
            }
            else{
                return 'Error';
            }
        default: return 'invalid'
    }
}
console.log(calculator(25,5,'/'));
