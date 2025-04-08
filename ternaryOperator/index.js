// ternary operator -> a shortcut to if{} and else{} statements
//                      helps to assign variable based on a condiyion
//                      condition ? codeIfTrue : codeIfFalse;


// let age = 21;
// let message = age >= 18 ? "You are an adult" : "You are a minor";
// console.log(message);


// let time = 10;
// let greeting = time < 12 ? "Good morning!!" : "Good afternoon!!";
// console.log(greeting);


// let isStudent = true;
// let message = isStudent ? "You are a student." : "You are not a student.";
// console.log(message);

// let purchaseAmount = 120;
// let discount = purchaseAmount >= 100 ? 10 : 0;
// console.log(`Your total is ₹${purchaseAmount - purchaseAmount * (discount/100)}`);


//______________________________________________________________________________________________


//let username = window.prompt("Enter your username: ");

//without method chaining code 


// username =username.trim();
// let letter = username.charAt(0);
// letter = letter.toUpperCase();

// let extraChars = username.slice(1);
// extraChars = extraChars.toLocaleLowerCase();
// username = letter + extraChars;

// console.log(username);

//-------------------------------------------

//method chaining code 

// username =username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLocaleLowerCase();
// console.log(username);

//----------------------------------------------------------------------

//whilel loop -> repeats until condition is true.

// let username1 = "";
// while(username1 === "" || username1 === null){
//     username1 = window.prompt("Enter your username");
// }

// console.log(`Hello ${username1}`);

//------------------------------------------------------------

// let loggedIn = false;
// let username;
// let password;

// while(!loggedIn){
//     username = prompt("Enter your username: ");
//     password = prompt("Enter your password: ");

//     if(username === "satish123" && password === "74123"){
//         loggedIn = true;
//         console.log("You are logged in!! Please try again.");
//     }
//     else{
//         console.log("Invalid credentails!!");
//     }
// }



// let loggedIn = true;
// let username;
// let password;

// do{
//     username = prompt("Enter your username: ");
//     password = prompt("Enter your password: ");

//     if(username === "satish123" && password === "74123"){
//         loggedIn = true;
//         console.log("You are logged in!! Please try again.");
//     }
//     else{
//         console.log("Invalid credentails!!");
//     }
// }while(!loggedIn);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// for loop ->  repeats some code a limited amount of times

// for(let i = 1; i <= 10 ; i+=2){
//     // console.log("MOM");
//     console.log(i);
// }
// console.log("Happy Birthday!!");

// for(let i = 1; i <= 20; i++){
    
//     if( i === 19){
//         // continue;
//         break;
//     }
//     else{
//         console.log(i);
//     }
// }
