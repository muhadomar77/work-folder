// import { error } from "node:console";

// //promises
// //basic promise syntax
// const myPromise = new Promise ((resolve, reject)=>{
// //simulate async work(eg, API call, file read)
// const sucess = false;

// if (sucess){
//     resolve('opreation successfull!'); //fullfilled
// }else{
//     reject('Operation failled');//rejected
// }
// }); 

// //Consuming a Promise: .then(), .catch(), .finally()

// myPromise
// .then((result)=>{
//     // called when resolved
//     console.log('Success:', result);
// })
// .catch((error)=>{
//     //called when rejected
//     console.error('Error:',error.message);

// })
// .finally(()=>{
//      // Always called — resolved OR rejected
//      console.log('Promise settled. Cleanup here.');
// });

//promise chaining
// fetchUser(userId)
// .then(user => fetchOrders(user.id));
// .then(orders => fetchOrderDetails(order[0].id));
// .then(details=> fetchShipping(details.shippingId));
// .then(shipping=> console.log('shipping:',shipping));
// .catch(error =>console.error('Error:',error));



