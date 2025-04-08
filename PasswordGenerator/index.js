// Random Password Generator

function generatePassword(length, lowerCase, upperCase, numberCase, symbolCase){
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolchars = "!@$#%^&*()-_=+";

    let allowedchars = "";
    let password = "";

    allowedchars += lowerCase ? lowerChars : "";
    allowedchars += upperCase ? upperChars : "";
    allowedchars += numberCase ? numberChars : "";
    allowedchars += symbolCase ? symbolchars : "";

    if(length <= 0){
        return "(Paassword length must be at least 1)";
    }
    if(allowedchars.length === 0){
        return "(At leat 1 set of character needs to be selected)";
    }

    for(let i=0; i<length; i++){
        const randomIndex = Math.floor(Math.random() * allowedchars.length);
        password += allowedchars[randomIndex];
    }

    return password;
}

const passwordLength = window.prompt();
const lowerCase = true;
const upperCase = true;
const numberCase = true; 
const symbolCase = true;

const password = generatePassword(passwordLength, lowerCase, upperCase, numberCase, symbolCase);
                            
console.log(`Generated Password: ${password}`);