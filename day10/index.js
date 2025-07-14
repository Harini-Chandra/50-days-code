/*let age=prompt("Enter your age");
age=Number(age);
let isStudent=true;
if(age<30)
{
    if(isStudent)
    {
        console.log("Young Student");
    }
    else
    {
        console.log("Young Non Student");
    }
}
else
{
    console.log("OLD");
}
*/
/*
num=Number(prompt("Enter any number")); 
if(num%2!=0)
{
    if(num>0)
    {
       alert("The number is positive and odd");
    }
    else 
    {
        alert("The number is negative and odd");
    }
}
else if(num==0)
{
    alert("The number is ZERO");
}
else
{
    if(num>0)
    {
        alert("The number is positive and even");
    }
    else
    {
        alert("The number is negative and even");
    }
}
*/
/*
day=Number(prompt("Enter day number"));
switch(day)
{
    case 1:
        alert("Monday");
        break;
    case 2: 
        alert("Tuesday");
        break;
    case 3:
        alert("Wednesday");
        break;
    case 4:
        alert("Thurday");
        break;  
    default:
        alert("Holiday");         
}
*/
/*
name=prompt("Enter ur name");
age=Number(prompt(name+" Enter your age"));
switch(true)
{
    case (age>=13 && age<18):
        alert(name+" is not eligible to vote");
        break;
    case (age>=18):
        alert(name+" is eligible to vote");
    case (age>=65):
        alert(name+" is Senior citizen");
        break;
    default:
        alert("ur old");          
}
        */
       /*
let userName= prompt("Enter your name");
let age= Number(prompt(userName+ "Enter age"));
switch(true)
{
    case age<=0 || Number.isNaN(age):
        alert("Invalid age");
        break;
     case age>=65:
        alert("Senior Citizen");    
    case age>=18:
        alert("elgible to vote");
        break;
    case age>=13 && age<18:
        alert(" Not elgible");
        break;
    default:
        alert("Dumb");
}
*/
//Control statements
/*
for(let i=1;i<=20;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}
let sum=0;
for(let i=0;i<100;i++)
{
    sum+=i;
}
console.log(sum);
let mul=0;
let num=Number(prompt("Enter a number"));
for(let i=1;i<11;i++)
{3
    mul=num*i;
    console.log(num+" X "+i+" = "+mul);
}
const fruits=["apple","banana","cherry"];
for(const fruit of fruits)
    {
        console.log(fruit);
    }   
*/
let mul=0;
let num=Number(prompt("Enter a number"));
let i=1;
while(i<11)
    {
       mul=num*i;
       console.log(num+" X "+i+" = "+mul);
       i++;
    }        