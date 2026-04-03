let arr = [20,30,5];
let max = arr[0];
for (let i = 0; i<arr.length ; i ++){
  if (arr[i]>max){
    max = arr[i];
  }
}
console.log (max)

// minimum
let arr1 = [20,30,5];
let min = arr1[0];
for (let i = 1; i<arr1.length ; i++){
  if (arr1[i]< max){
    min = arr[i];
  }
}
console.log (min);