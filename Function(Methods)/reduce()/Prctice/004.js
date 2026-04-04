// Count total even numbers 

let num = [2,4,5,3,62,78,90,99,33];

// let countEve = num
// .filter(eve=>(eve%2==0))
// console.log(countEve);
// console.log("Total even is",countEve.length)

let count = num.reduce((acc,curr)=> {
  if (curr%2==0){
    return acc+1;
  }
return acc;
},0)
console.log(count);