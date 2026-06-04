
//call back function
let cb=()=>{
    console.log("iam a call back function");

}
let main=(x)=>{
    console.log("iam a main function");
    //call back function
    x();
}
// calling function
main(cb);
let inner=()=>{
    console.log("iam a inner function");

}
let outter=(inner)=>{
    console.log("iam a outter function");
    inner();
}
outter(inner);
main(inner);

// call back fnction
let addition=(a,b,func)=>{ // here func is a function created inside the parameter of addition function
    func(a,b);// function with its value
    console.log(a+b);
}

let subttraction=(a,b)=>{
    console.log(a-b);
}
addition(5,10,subttraction);// here the subtraction is called for the func funtion, therefore the arguments function can only call the existing function (subtraction function )
subttraction(10,2);




