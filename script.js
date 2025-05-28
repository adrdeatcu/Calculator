let outputDisplay= document.getElementById("output")



function add(a,b)
{
    return a+b;
}

function subtract(a,b)
{
    return a-b;
}

function multiply(a,b)
{
    return a*b;
}

function divide(a,b)
{
    return a/b
}

function procent(number)
{
    return number/100;
}

function operate(operator,a,b)
{
    if(operator=="+")
    {
        return add(a,b);
    }else if(operator=="-")
    {
        return subtract(a,b);
    }else if(operator=="*")
    {
        return multiply(a,b);
    }else
    {
        return divide(a,b);
    }
}

let finalResult = 0;
console.log(operate("-",10,5));

finalResult=operate("+",5,6);
console.log(finalResult);
