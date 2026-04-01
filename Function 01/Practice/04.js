
//  function fact(num) {
//   let result = 1;
//   for(let i=1; i<=num; i++){
//     result = result*i;
    
//   }
// return result;
// }
// console.log(fact(5));






// let num = Number(prompt("Enter Num"));

// function fact(num) {
//   let result = 1;
//   for (let i =1;i<=num;i++){
//     result*=i;
//   }
//   return result;
// }
// console.log("Factorial is ", fact(num));


// Arrow Function

// const fact = (n) =>{
//   let result = 1;
//   for(let i=1; i<=n ; i++){
//     result*=i;
//   }
//   return result;
// };
// console.log(fact(5));


// short Form

const fact = (num) =>{
  let res=1;
  for( let i=1; i<=num; i ++) res*=i;
  return res;
}
console.log(fact(5));