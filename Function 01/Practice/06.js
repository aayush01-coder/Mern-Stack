function reverse(num) {
  let rev =0;

  while(num>0);{
  let digit = rev%10;   // last num niklna 
// digit
  rev = rev*10+digit; // buils 
  // reverse
  num = Math.floor(num/10);  // remove
}
return rev;
}
console.log(reverse(1234));