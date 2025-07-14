//string datatype
let greeting="Hello World";
console.log(greeting);
console.log(typeof greeting);
let message='This is single quoted statement';
console.log(message);
console.log(typeof message);
let dynamicMsg=`My name is Haru`;
console.log(dynamicMsg);
console.log(typeof dynamicMsg);
//number datatype
let score=100;
console.log(score);
console.log(typeof score);
let price=47.8;
console.log(price);
console.log(typeof price);
//boolean datatype
let isActive=true;
console.log(isActive);
console.log(typeof isActive);
let isLoggedIn=false;
console.log(isLoggedIn);
console.log(typeof isLoggedIn);
//undefined datatype
let myVariable;
console.log(myVariable);
console.log(typeof myVariable);
//null datatype
let emptyValue=null;
console.log(emptyValue);
console.log(typeof emptyValue);
//arithmetic operators
let result=10+5;
console.log(result)
let ans=10-5;
console.log(ans);
let val=10*5;
console.log(val);
let quo=10/5;
console.log(quo);
let remainder=6%5;
console.log(remainder);
let power=2**3;
console.log(power);
let count=0;
count++;
console.log(count);
//assignment operators
let x=10;
x+=5;
console.log(x);
console.log(5=="5");
console.log(5==="5");
console.log(10>5);
//comparison operators
let a=true;
let b=false;
console.log(a&&b);
console.log(a||b);
console.log(!a);
//ternary operator
let age=20;
let status=(age>=18)?"Adult":"Minor";
console.log(status);
//if-else
/*let age1=prompt("Enter your age:");
if(age1>=18)
{
    console.log("You are eligible to vote");
}
else{
    console.log("You are unable to vote");
}*/
//else if
let marks=prompt("Enter your marks");
if(marks>90){
    console.log("Grade A");
}
else if(70<=marks<=90)
{
    console.log("Grade B");
}
else if(40<=marks<=70)
{
    console.log("Grade C");
}
else{
    console.log("Fail");
}