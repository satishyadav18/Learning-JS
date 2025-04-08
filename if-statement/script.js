// if Statement 

let age;

document.getElementById("mySubmit").onclick = function(){
    age = document.getElementById("myText").value;
    if(age >= 18){
        console.log("You are old enough to vote.");
    }
    else{
        console.log("You must be 18+ to vote.")
    }
}

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

// let time = 12;

// if(time < 12){
//     console.log("Good morning!");
// }
// else{
//     console.log("Good afternoon!");
// }

// let student = true;

// if(student){
//     console.log("You are a student.");
// }
// else{
//     console.log("You aren't a student.")
// }

//Nested if-else

// let age1 = 21;
// let hasLicense = false;

// if(age1 >= 18){
//     console.log("You are old enough to drive.")

//     if(hasLicense){
//         console.log("You have your license.")
//     }
//     else{
//         console.log("You don't have license yet!")
//     }
// }
// else{
//     console.log("You must be 18+ to have a license.")
// }

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

const myText = document.getElementById("myText");
const mySubmit = document.getElementById("mySubmit");
const result = document.getElementById("result");

let age2;

mySubmit.onclick = function() {

    age2 = myText.value;
    age2 = Number(age2);

    if(age2 >= 100){ 
       // console.log("You are too old to enter this site.")
       result.textContent = "You are too old to enter this site."
    }
    else if(age2 >= 18){
        //console.log("You are old enough to enter this site.")
        result.textContent = "Yor are old enough to enter this site."
    }
    else if(age2 < 0){
       // console.log("Age cann't be less than zero!!")
       result.textContent = "Age cann't be less than zero."
    }
    else{
       // console.log("You must be 18+ to enter this website.")
       result.textContent = "You must be 18+ to enter this site."
    }
}
