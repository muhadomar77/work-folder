//clousre function
//program1
/*
let college=(course)=>{
    let collegeName="ABC College";
    return function (course){
        return "iam lerning "+course +"at"+ collegeName;
    }
}
let details=college();
console.log(details("MCA"));

//program2
let outter1=()=>{
    let name="jhon";
    return function(){
        console.log("MY name is"+ name);
    }
}
let inner=outter1();
inner();

//program3
//note:=()=> is arrow function
let outter2 = () => {
    let i = 0;
    return function inner2() {// second inner function
        for (i = 0; i <= 5; i++)

            console.log(i);
    }
}
let result = outter2();
result();



//Write a closure that creates a private counter with increment, decrement, and reset methods.
let createPrivateCounte=()=>{
    let count=0;
    return {
       increment:()=> ++count,
       decrement:()=> --count,
       reset:()=> {count=0},
       getCount:()=>count,
    };
}
let result2=createPrivateCounte();
console.log(result2.increment());//1
console.log(result2.increment());//2
console.log(result2.decrement());//1
console.log(result2.reset());//undefined
console.log(result2.getCount());//0

//closure-based function factory that generates multiplier functions

function multiplierFunction(factor){
    return function (number){
        return number*factor;
    };

}
let double = multiplierFunction(2);
let triple = multiplierFunction(3);

console.log(double(5));
console.log(triple(5));
console.log(double(7));
*/

 


