// Its is a special object that has details about the event

// Node.evenet =(e) {
  //handel here
// }
// e.target, e.type,e.clientX,eclientY



let btn1 = document.querySelector('#btn1');
btn1.onclick = (e) =>{
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX,e.clientY);
  console.log("btn1 was clicked");
  let a = 25;
  a++;
  console.log(a);//26

};

let box = document.querySelector('div');

box.onmouseover = (e) =>{
  console.log("You are inside the div");
   console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX,e.clientY);
  console.log("btn1 was clicked");
  let a = 25;
  a++;
  console.log(a);//26

}