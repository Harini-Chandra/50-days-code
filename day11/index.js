//odd or even using functions with hoisting
/*
let oddEven=function(num)
{
    if(num%2==0)
    {
        return "Even";
    }
    else
    {
        return "Odd";
    }
}
let num=Number(prompt("Enter a number"));
let result=oddEven(num);
console.log(num+" is "+result);

//using arrow function with hoisting
let oddEven=(num)=>
{
   let result=(num%2==0)? "even": "odd";
    return result;
}
console.log(oddEven(Number(prompt("Enter a number"))));
// without hoisting
let a=Number(prompt("Enter number 1"));
let b=Number(prompt("Enter number 2"));
let sum=(a,b)=>
{
    return a+b;
}
console.log(sum(a,b));
// factorial using arrow and hoisting 
let fact=(num)=>
{  
    let mul=1;
    for(let i=1;i<=num;i++)
    {
        mul*=i;
    }
    return mul;
}
console.log(fact(Number(prompt("Enter number"))));
//hoisting
let fb=function(num)
{
    if(num%3==0 && num%5==0)
    {
        return "FizzBuzz";
    }
    else if(num%5==0)
    {
        return "Buzz";
    }
    else if(num%3==0)
    {
        return "Fizz";
    }
    else
    {
        return num;
    }
}
alert(fb(Number(prompt("Enter a number"))));
*/
