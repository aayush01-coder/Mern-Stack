

// node.addEventListeners(event,callback,)
// node.removeEventListeners(event,callback,)

// *Note = the callback refrence should be same to remove
let btn1= document.querySelector('#btn1');

btn1.addEventListener('click',() =>{
  console.log('Button1 was clicked -handler1')
});

btn1.addEventListener('click',() =>{
  console.log('Button1 was clicked - handler2')
});
const handler3 = () => {
  console.log("btn wass clicked - handler3")
}

btn1.addEventListener('click',handler3);


btn1.addEventListener('click',() =>{
  console.log('Button1 was clicked - handler4')
});
btn1.removeEventListener('click',handler3);