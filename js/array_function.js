/*let fruits=["Banana","Orange","Apple","Mango"];
console.log("Original Array:");
console.log(fruits);
fruits.push("Cherry"); // push is used to add last element in array
console.log("After Push:");
console.log(fruits);

fruits.pop(); // pop is used to remove last element in array
console.log("After Pop:");
console.log(fruits);
let cars=["Saab","Volvo","BMW"];
console.log("Original Array:");
console.log(cars);
cars.unshift("Mercedes"); // unshift is used to add first element in array
console.log("After UnShift");
console.log(cars);
console.log("After Shift:");
cars.shift(); // shift is used to remove first element in array
console.log(cars);
// push -pop   unshift -shift 

//splice
//array.splice(start, deleteCount, item1, item2, ...)

let flowers=["Rose","Lily","Tulip"];
console.log("Original Array:");
console.log(flowers);
//splice(start index number,detelected  item number,add item value)
flowers.splice(0,0,"Daisy"); // splice() in JavaScript is used to add, remove, or replace elements in an array.
console.log("After Splice:");
console.log(flowers);

//Search & access
//indexOf() 
let vegetables=["carrot","potato","onion"];
console.log("Original Array:");
console.log(vegetables);
let index=vegetables.indexOf("Potato");
console.log("Index of Potato:"+index);
let is_exist=vegetables.includes("onion");
let result=is_exist?"Test Case Pass":"Test Case Fail";
console.log("Is Onion Exist?"+is_exist);
console.log("Test Result:"+result);

//find 
let found=vegetables.find(x => x.includes("o"));
console.log("Found Item:"+found);

let found_index=vegetables.findIndex(j => j.includes("potato"));
console.log("Found Index:"+found_index);
vegetables.splice(found_index+1,0,"Tomato");
console.log("After Splice:");
console.log(vegetables);
*/

//push,pop,unshift,shift

/*
let fruits=["apple","orange","grape"];
console.log(fruits);
fruits.push("banana");// add banana in last 
console.log(fruits);// after push

fruits.pop();// lasr element will delete from arrays
console.log(fruits);// after pop
*/

/*
let animals=["lion","tiger","monkey","cat"];
console.log(animals);
animals.unshift("dog");
console.log(animals);
animals.shift();
console.log(animals);
*/

//splice
/*
let animals=["lion","tiger","monkey","cat"];
animals.splice(0,0,"horse");
console.log(animals);
*/

/*
//IndexOf()
let animals=["lion","tiger","asdfgh","monkey","cat"];
console.log(animals);
animals.indexOf("monkey");
let index=animals.indexOf("cat");// cheking index number of cat
console.log("indexof:" + index);

//Include()
let includs=animals.includes("tiger");// checking tiger is there in array
console.log("includes of:"+ includs);// TRUE

//find(fn)
let finds=animals.find(x=> x.length >4);// return the first element in an array that matches a condition.
console.log(finds);

//findIndex(fn)

let findindexs=animals.findIndex(x=> x==="cat");// return the index (position) of the first element that satisfies a condition.
console.log(findindexs);

*/

//map()
/*
let numbers=[1,2,3,4,5];
let mapping=numbers.map(x=> x*2);
console.log("multiple with 2:" + mapping);// used to transform each element of an array and return a new array.

let filter=numbers.filter(x=> x % 2 ===0);
console.log(filter);    

//slice(start, end)
let slice=numbers.slice(2,5);//Returns a shallow copy of a portion.
console.log(slice);//3,4,5

//concat
let concat=numbers.concat([9,10]);// Merges two or more arrays.
console.log(concat);// [1,2,3,4,5,9,10]
*/


//flat (depth)

let arr = [[1,2],[3,[4,[5]]]];
console.log(arr.flat(3));

let flat_value = [[1,2],[3,[4,[5]]]].flat(3);
console.log(flat_value);

let num=[1,2,3];
let mapnum=num.map(x=>[x,[x*2,x*3]]);
let flat=mapnum.flat(3)
console.log(flat);
let flatmap=num.flatMap(x=>[x,x*2]);
console.log(flatmap);

