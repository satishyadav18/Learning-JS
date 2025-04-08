// function => A seection of reusable code.
//             Declare code once, use it whenever you want.
//             Call the function to execut that code.

function happyBirthday(name, age){
    console.log("Happy Birthday to you!");
    console.log(`Happy Birthday dear ${name}.`);
    console.log(`You are ${age} years old`);
}


// happyBirthday("Satish", 21);
// happyBirthday("Akz", 25);

function add(a, b){
    // let result = a + b;
    // return result;

    return a + b;
}
function sub(a, b){
    return a - b;
}
function mul(a, b){
    return a * b;
}
function isEven(num){
    // if(num % 2 == 0){
    //     return true;
    // }
    // else{
    //     return false;
    // }                          
            // instead if else, can use ternary operator

    return num % 2 === 0 ? true : false;
}

// let ans = add(5, 8);
// console.log(ans);
console.log(add(9, 6));

console.log(sub(9, 6));

console.log(mul(9, 6));

console.log(isEven(24));





//Variable scope => where a variable is recognised and 
//                     accessiable (local or global)

let s = 21;

fun1();
fun2();

function fun1(){
    let s = 2;      //local variable get high precedence
    console.log(s);
}

function fun2(){
    // let s = 3;
    console.log(s);
}




//Arrow function => concise way to write function expressions
//                 (function without name)
//                 (=>) is called fat arrow operator 


// const hello = function(){
//     console.log("Hello World!!!");
// }
// hello();    

//instead of above code, can use arrow function

const hello = (name) => {
    console.log(`Hello ${name}`);
}

hello("Satish");


//Fisher-Yates shuffle algorithm

const cards = [
    "A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K" 
];

shuffle(cards);
console.log(cards);

function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
