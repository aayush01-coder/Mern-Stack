let arr =[ 10,20,5,8];
let max = arr.reduce((acc,curr)=>{
  return acc>curr?acc:curr;
});
console.log(max);
