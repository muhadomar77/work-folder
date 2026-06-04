/*
//reduce()
let number=[15,35,55,10];
let reduce=number.reduce((acc,x)=> acc+x);
console.log(reduce);

//0+15=15 (accumulator=0+x=15)
//15+35+=50
//50+55=105
//105+10=115

//every()

let no=[6,2,4,5];
let every=no.every(x=> x % 2 === 0 );
console.log(every);// TRUE

//some(fn)

let some=no.some(x=> x % 2 === 0 );
console.log(some);

//sort()
let sort=["b","a","c"].sort();  // ["a","b","c"]
console.log(sort);
let digit=[10,2,5];
let result=digit.sort((a,b)=>a-b); // [2,5,10]
console.log(result);

//reverse
let reverse= sort.reverse();
console.log(reverse);//c,b,a it reverse in correct order

let reversedigit= digit.reverse();
console.log(reversedigit);//10,5,2 it reverse in correct order
*/

//join(separator)
let personname=["muhad","Ummer"];

console.log(`"personname:"+${personname.join("+")}`);

//foreach
let fruits = ["Apple","Mango","Orange"];

fruits.forEach((item,index)=>{
 console.log(index, item);
});
