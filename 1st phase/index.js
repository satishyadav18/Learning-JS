//----------->>>>>>>>>>>>>>1st chapter

//---------1st phase
// console.log("Keep going🫡.");
// console.log("You are doing good.")

// window.alert("It's an Emergency!!");
// window.alert("Inform everyone.");

//-----------2nd phase
// document.getElementById("myH1").textContent = "Hello";
// document.getElementById("myP").textContent = "Everyone!";


//--------------->>>>>>>>>>>>2nd chap>>>>>>>>>>>>>>>>>----------
//_______________________________________________________________

//------------first phase -> variables ----------------
// let x;
// x = 118;

// let y = 21;

// console.log(x);
// console.log(y);

// let age = 21;
// let gpa = 8.8;

// console.log(typeof gpa);
// console.log(`You are ${age} are old.`);
// console.log(`Your gpa is ${gpa}.`);

//--------------Second phase String--------------- 

// let firstName = "Satish";
// let email = "satish12@.gmail.com";

// console.log(typeof firstName);
// console.log(`Your name is ${firstName}`)
// console.log(`Your gmail is ${email}`);

// >>>>>>>>>>>>>>-------Booleans------------->>>>>>>>>>>>

// let online = false;
// let forSell = true;

// console.log(typeof online);
// console.log(`Java is online: ${online}`);
// console.log(`Is this car for sell: ${forSell}`);

// let Name = "Satish";
// let age = 20;
// let isStudent = true;

// document.getElementById("p1").textContent = `Your name is: ${Name}.`;
// document.getElementById("p2").textContent = `You are ${age} years old.`;
// document.getElementById("p3").textContent = `Enrolled : ${isStudent}`;

//_________________________________________________________________________
// >>>>>>>>>>>>---------3rd Chap Arithmeatic operators------->>>>>>>>>>>>>

// let num = 20;

// num = num + 10;
// num = num - 24;
// num /= 2;   ------shorthand (argumented assignment) operatin can be done 
// num *= 3;
// num = num % 3;
// num **= 2;  // square
// num++;
// --num;
// num--;
// ++num;
// console.log(num);

//>>>>>>>>>>>------4th chap User input in js---->>>>>>> 
//_________________________________________________________

//------Easy way = window prompt
// let username = window.prompt("What's your usename?"); 
// console.log(username);

//professional way = HTML textbox
let username;

document.getElementById("mySubmit").onclick = function(){
    username = document.getElementById("myText").value;
    document.getElementById("myH1").textContent = `Hello ${username}`;
    console.log(username);
}

//>>>>>>>>>>>>>>------5th chap type conversion------>>>>>>>>>>>>>>> 
//_________________________________________________________________

// let age = window.prompt("how old are you?");

// age = Number(age); //to convert string to number
// age+=1; // it is append 1 as string .

// console.log(age, typeof age);

// let x = "0"; 
// let y = "Bug";
// let z = "Bug";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, typeof x);
// console.log(y, typeof y);
// console.log(z, typeof z);

//>>>>>>>>>>-----6th chap Constant------>>>>>>>>>>>>>>
//____costant-> a variable tha can't be changed_______

// let pi = 3.14159;  >>>>this value can be changed so we assign value as Const with capital letter variables and it only used with primitive data tpyes

const PI = 3.14159;
let radius;
let circumference;

// radius = window.prompt("Enter the radius of a circle: ");
// radius = Number(radius);
// PI = 3242;  thic don't change the value but throws an error


document.getElementById("Submit").onclick = function(){
    radius = document.getElementById("Text").value;
    radius = Number(radius);
    circumference = 2 * PI * radius;
    document.getElementById("myH3").textContent = ` Circumference: ${circumference}`;
}

// console.log(circumference);
