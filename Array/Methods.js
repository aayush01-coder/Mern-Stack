
let arr = [3,40,5,6,44,756,3,4,5,6];

for(let i=0 ; i< arr.length;i++){
  console.log(arr[i]);
 
}
 console.log("lenght of array",arr.length);


// 4 imp Array Method 


// Push method add at end
arr.push(100,500);
console.log(arr);

// POP methd remove at last  
arr.pop();
console.log(arr);

//Shift Method remove at first 
arr.shift();
console.log (arr);

// Unshift method add at first
arr.unshift(20,30);
console.log(arr);