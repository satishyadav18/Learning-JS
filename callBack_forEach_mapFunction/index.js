hello(); // Hello World!

function hello() {
  console.log('Hello World!');
  setTimeout(() => {
    console.log('Hello World Again!');
  }, 1000);
}

goodbye(); // ReferenceError: goodbye is not defined

function goodbye() {
  console.log('Goodbye!!');
}


//>>>>>>>>>>>>>>>>>>>>>>>>>
greet(wish); // good morning!

function greet(callback) {
    console.log('good morning!');
    callback();
}

function wish() {
  console.log('Happy Holi!');
}


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//sum(5, 5, display); // 10 for displaying on the console

sum(5, 5, displayPage); // for displaying on the web page

function sum(a, b, callback) {
    let result = a + b;
    callback(result);
}

function display(result) {
    console.log(result);
}


function displayPage(result) {
    document.getElementById('myH1').textContent = result;
}

// sum(display,5, 13); // 18

// function sum(callback,a, b) {
//     let result = a + b;
//     callback(result);
// }

// function display(result) {
//     console.log(result);
// }


//>>>>>>>>>>>>>>>>>>>>>>>>

//forEach() = method calls a function once for each element in an array, in order.
// or it is used to iterate over an array and apply a specified funstion (callback) to each element of an array.

//arrar.forEach(callback)
//element, index, array are provided as arguments to the callback function

let arr = [1, 2, 3, 4, 5];

arr.forEach(double);
arr.forEach(display);

function double(element, index, array) {
    array[index] = element * 2;
}

function display(element) {
    console.log(element);
}



//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

//map() = method creates a new array with the results of calling a function for every array element.
// or it is used to iterate over an array and apply a specified funstion (callback) to each element of an array and returns a new array.  


const numbers = [1, 2, 3, 4, 5];
const squares = numbers.map(square);
const cubes = numbers.map(cube);

//console.log(squares); // [1, 4, 9, 16, 25]
console.log(cubes); // [1, 8, 27, 64, 125]

function square(element) {
    return Math.pow(element, 2);
}

function cube(element){
    return Math.pow(element, 3);
}


const dates = ['2025-03-14', '2025-03-15', '2025-03-16'];
const formattedDates = dates.map(formatDate);

console.log(formattedDates); // ['14/03/2025', '15/03/2025', '16/03/2025']

function formatDate(element) {
    const parts = element.split('-');
    return `${parts[2]}/${parts[1]}/${parts[0]}`;
}