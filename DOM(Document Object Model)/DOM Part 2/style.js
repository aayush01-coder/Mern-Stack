// let div = document.querySelector('div');
// console.log('div');
// div.style.backgroundColor ='green';
// div.style.backgroundColor ='yellow';
// div.style.fontSize = '20px';

// div.innerText ='Heloo';

// div.style.visibility = 'hidden'


// Creation of element  button

let newBtn = document.createElement('button');
newBtn.innerText = 'Click';
console.log(newBtn);
let p = document.querySelector('p');
// div.append(newBtn); // Add at the end  of  the node(inside)
// div.prepend(newBtn);// Add at the start  of  the node(inside)
// div.before(newBtn);// Add at the start  of  the node(outside)
p.after(newBtn); // Add at the end  of  the node(outside)




// Creatin of Heading

let newHeading = document.createElement('h1');
newHeading.innerHtml = 'This is a new Heading';

document.querySelector('body').prepend('newHeading');


// Deletin 

let para = document.querySelector("p");
para.remove();

let newHeading = document.querySelector("h1");
newHeading.remove();