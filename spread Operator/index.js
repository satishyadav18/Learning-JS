// spread operator =   ... allows an iterable such as
//                     an array or string to be expanded
//                      into seperate elements
//                      (unpacks the elements)

let number = [1, 2, 3, 4, 5];
let max = Math.max(...number);
let min = Math.min(...number);

console.log(max);
console.log(min);


let username = "Satish Yadav";
let letters =[...username].join("-");

console.log(letters);


let fruits = ["Apple", "Orange", "Guava", "Watermelon", "Banana"];
let vegetables = ["Carrot", "Cabbage", "Potatoes", "Brinjal"];

//let foods = [...fruits, ...vegetables, "Cake", "Milk"];  // spread operator can be used to combine arrays

//console.log(foods);



//rest parameter = (...rest) allow a function work with a variable 
// number of arguments by bundling them into an array opposite of spread

//                 spread =  expands an array into seperate elements
//                  rest = bundles seperate elements into an array


// function openFridge(...foods){
//     console.log(foods);      
// }

// const food1 = "kheer";
// const food2 = "daal";
// const food3 = "chawal";
// const food4 = "roti";
// const food5 = "sabji";

// openFridge(food1, food2, food3, food4, food5);


//OR--->>


function openFridge(...foods){
    console.log(...foods);      //(foods) passing this can be used to print in array directly
}

function getFood(...foods){
    return foods;
}

const food1 = "kheer";
const food2 = "daal";
const food3 = "chawal";
const food4 = "roti";
const food5 = "sabji";

const foods = getFood(food1, food2, food3, food4, food5);

console.log(foods);

//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

function sum(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result;
}

const total = sum(1,4,5,6,7,8,9);
console.log(`Your total is ₹${total}`);




function getAverage(...numbers){
    let result = 0;
    for(let number of numbers){
        result += number;
    }
    return result / numbers.length;
}

const total1 = getAverage(4,5,7,6,8,9,12,31);
console.log(`Average is ${total}`);



//combine Strings

function combineStrings(...strings){
    return strings.join(" ");
}

const fullName = combineStrings("Mr.", "John", "Smith", "III");
console.log(fullName);