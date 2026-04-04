/// Combine filter + reduce
let arr = [1,2,3,4,5];
let eveSum = arr
.filter(num=>(num%2==0))
.reduce((acc,curr)=>acc+curr,0)
console.log(eveSum);