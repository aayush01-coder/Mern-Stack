let arr = [2,1,3,4,4,5,5,6,6,3,];
let seen = {};
let duplicate = [];

for( let i = 0; i<arr.length ; i ++){
  let num=arr[i];
if (seen[num]){
  duplicate.push(num);

} else{
  seen[num]=true;
}
}console.log(duplicate);