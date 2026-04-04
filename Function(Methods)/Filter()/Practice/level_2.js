// Remove fals num 
let arr  =[0,1,false,2,"",3];
let result2= arr.filter(Boolean);
console.log(result2);

/// Get num divisibe by 3
let arr2 = [ 3,5,6,7,9,21];
let div= arr2.filter(num=>(num%3 ==0));
console.log(div);

/// Filter a string

let arr3 = [1,"hello",2,"world"];
let result= arr3.filter(item=> typeof item === "string");
console.log(result);