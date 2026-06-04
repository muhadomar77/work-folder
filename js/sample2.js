let first_name="muhad";
let last_name="ummer ck";

const height=174;

console.log(`I am ${first_name} ${last_name}\n my height is ${height}`);
// \n used for new lin character 
// ` using this simple we can write the test and variable in console.log()

//id created in html documenet and connected the .js file
//let div_id = document.getElementById("divid");
//console.log(div_id.innerText); 

//datatypes 
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

//opertors
// arithmetic operators :-> +, -, *, /, %
let a,b,c;
a=10;
b=5;
c=a+b;
console.log(`The sum of ${a} and ${b} is ${c}`);

// assignment operators :-> =, +=, -=, *=, /=, %=
c+=a //c=c+a
console.log(`The value of c after addition is ${c}`)

a*=c// a=a*c
console.log(`the value of c after multplication is  ${a}`);


// comparison operators :-> ==, ===, !=, !==, >, <, >=, <=
a==b//false
a!=b//true
a>b//true
a<b//false
a>=b//true
a<=b//false
let x=20,y="20";
console.log(x==y);
console.log(x===y);
