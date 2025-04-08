// Math = built-in object that proiveds a collection of properties and methods

// Math.PI
// console.log(Math.PI)
// console.log(Math.E)

// let x = -5.65;
// // let y = 2;
// let y = 225;
// // let z;
// let z = 34;

//z = Math.round(x);
//z = Math.floor(x);
//z = Math.ceil(x);
//z = Math.trunc(x);

// z = Math.pow(y, x);
// z = Math.sqrt(y);
// z = Math.log(x);

// z = Math.sin(x);
// z = Math.cos(x);

// z = Math.abs(x); // gives +ve result 
// z = Math.sign(x);

// console.log(z);

// let max = Math.max(x, y, z);
// let min = Math.min(x, y, z);

// console.log(min);

//>>>>>>>>>------Random number generator----->>>>>>>>>>>
//-------------------------------------------------------

// const min = 50;
// const max = 100;

// let randomNum = Math.floor(Math.random() * (max - min)) + min; // umber between 50 - 100

// console.log(randomNum);

const myButton = document.getElementById("myBtn");
const myLabel1 = document.getElementById("myLabel1");
const myLabel2 = document.getElementById("myLabel2");
const myLabel3 = document.getElementById("myLabel3");
const min = 1;
const max = 6;
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    myLabel1.textContent = randomNum1;
    myLabel2.textContent = randomNum2;
    myLabel3.textContent = randomNum3;
}

