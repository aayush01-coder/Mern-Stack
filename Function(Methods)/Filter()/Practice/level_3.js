// Filter prime number 

let arr = [ 2,3,4,5,7,9];
let primeNum  = arr.filter(num=>{
  if (num<=1)
    return false;
  for(let  i=2;i<=Math.sqrt(num);i++)
  {
    if (num%i===0)
      return false;
  }
  return true
});
console.log(primeNum);
