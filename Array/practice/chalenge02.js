let arr=[2,4,5,6,6,6,7,,4,4,3,3,5,];
let unique=[];
for( i = 0 ; i <arr.length; i++){
  if (!unique.includes(arr[i])){
    unique.push(arr[i]);
  }
}
console.log(unique)