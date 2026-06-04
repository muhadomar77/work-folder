let first_name="John";
let last_name="Deo";

const age=30;
console.log(`I am ${first_name} ${last_name}\nmy age is ${age}`);

//data type 
let student_name="Sarath";
const std_age=25;
const is_passed=true;
const registeration_no=12345;
let courser_price=35000.50;
let subjects=["Maths","Science","English"];
let student_info={
    "name":"Sarath",
    "registration_no":registeration_no,
    "course":"MCA",
    "email":"sarath@example.com",
    "phone":1234567890,
    "is_passed":true
}

//operators 
// arithmetic operators :-> +, -, *, /, %
let a,b,c;
a=10;
b=5;
c=a+b;
console.log(`The sum of ${a} and ${b} is ${c}`);
// assignment operators :-> =, +=, -=, *=, /=, %=
c+=a //c=c+a
console.log(`The value of c after addition is ${c}`)
c*=2 //c=c*2
console.log(`The value of c after multiplication is ${c}`)
// comparison operators :-> ==, ===, !=, !==, >, <, >=, <=
a==b//false
a!=b//true
a>b//true
a<b//false
a>=b//true
a<=b//false
let x=20,y="20";
console.log(x==y) //true
console.log(x===y) //false
// logical operators :-> &&, ||, !//combination of two or more conditions 
console.log(`logic operator  && example: ${x>10 && y==20}`)
let std_age1=12;
console.log(!(std_age1>=18 && std_age1<=25))

// ternary operator :-> condition ? expression1 : expression2 
let  is_admitted=(std_age1>=18 && std_age1<=25)?  "Admitted" : "Not Admitted";
console.log(`The Student is ${is_admitted}`)
// find the  net amount  after the  discount and gst?
/*
 price      | discount    |  gst 
1000        |   10%       | 18%
1000-1500   | 15%         | 18%    

*/
let item_price=1000;
let discount,gst=18,net_amount;
net_amount=(item_price===1000)?
item_price-((item_price*10)/100)+((item_price*gst)/100)
:
(item_price>1000 && item_price<=1500)?
item_price-(item_price*15)/100+(item_price*gst)/100
:item_price+(item_price*gst)/100;
console.log(`The net amount after discount and gst is ${net_amount}`)

