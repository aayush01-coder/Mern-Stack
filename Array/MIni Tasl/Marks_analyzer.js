let marks = [ 60,90,70,80];
let sum = 0;
let max= marks[0];

for (let i = 0; i<marks.length; i++){

  sum+=marks[i];

  if( marks[i] > max){
    max=marks[i];
  }

}
console.log( "Total = ",sum);
console.log("Max = ", max )
console.log("Average =",sum/marks.length)