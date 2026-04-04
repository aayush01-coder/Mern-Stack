//   Filter Objects

let users = [
  {name: "A", age: 20},
  {name: "B", age: 17},
  {name: "C", age: 25}
]
let reuslt = users.filter(user=> user.age>18);
 
console.log(reuslt);
// find Active user 

let users2 = [
  {name : "A" , active: true},
  {name : "B" , active: false}
];
let result2 = users2.filter(user=> user.active);
console.log(result2);

/// Bonus
// Combine Filter and Map

let arr3 = [ 1,2,3,4,5];
let result3 =arr3.filter(num=>(num%2==0));
let result4 = result3.map(mul=>(mul*10));

console.log(result4);

