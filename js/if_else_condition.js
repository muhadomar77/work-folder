//if 
/*
if(condition){
//code to be executed if condition is true
}
else{
     //code to be executed if condition is false
    }
*/
let a=-10;
let result=a>0;
if(result){
    console.log("a is postive");
}
else{
    console.log("a is negative");
}

let x=10;
let y=20;
result = x>y;
if(result){
    console.log("x is greater than y");
}
else{
    console.log("y is greater than x");
}

//else if

let marks=75;
if(marks>=90){
    console.log("grade a");
}
else if(marks>=80 && marks<90){  //it will check 80 b/w 90
    console.log("grade b");
}
else if(marks>=70 && marks<80){
    console.log("grade c");
}

else{
    console.log("grade d");
}
    

let age=29;
if(age>=60){
    console.log("1 is elder");
}
else if(age>=30 && age<55){    // it will check 30 b/w 55
    console.log("2 is elder");
}
else if(age>=55 && age<80){
console.log("3 elder")
}

else{
    console.log("is younger");
}
    
   let day=10;
if(day==1){
    console.log("Monday");
}
else if(day==2)
{
    console.log("Tuesday");
}
else if(day==3)
{
    console.log("Wednesday");
}
else if(day==4)
{
    console.log("Thursday");
}
else if(day==5)
{
    console.log("Friday");
}
else if(day==6)
{
    console.log("Saturday");
}
else if(day==7)
{
    console.log("Sunday");
}
else{
    console.log("Invalid day");
}
    

//loop  while do while  forloop
/* for loop  
for(initialization; condition; increment/decrement){
    //code to be executed
}
    for(let i=0;i<5;i++)
{
    }

*/

    
let fruits=["apple","bannana","orange","apple"];
// console.log(fruits[0])//apple
// console.log(fruits[1])//bannana
// console.log(fruits[2])//orange
let length=4;

for(let i = fruits.length - 1; i >= 0; i--) // reverse
{
console.log(fruits[i]);
}


for(let i=0; i<length; i++) 
{
console.log(fruits[i]);
}
for(let i=0;i<5;i++){
    console.log(i);
}

