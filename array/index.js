//array => a variable like structure that can hold more
//              than 1 value





// let fruits = ["Apple", "Orange", "Guava", "Watermelon"];

// console.log(fruits);

// // fruits[3] = "coconut";

// fruits.push("Peer");  // inbuilt fun to add element to end of the array
// //fruits.pop();   // inbuilt fun to remove element to end of the array

// fruits.unshift("Mango"); // adds elements to beginning of array
// fruits.shift();  // removes elements from beginning


// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);


// let noOfFruits = fruits.length;

// // let index = fruits.indexOf("Watermelon");

// let index = fruits.indexOf("Tomato");   // it does not exit so it will show -1

// console.log(noOfFruits);

// console.log(index);


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

let fruits = ["Apple", "Orange", "Guava", "Watermelon", "Banana"];

// for(let i=0; i<fruits.length; i++){
//     console.log(fruits[i]);
// }


// fruits.sort();  // => Apple Banana Guava Orrange Watermelon

fruits.sort().reverse();  // => Watermelon Orrange Guava Banana Apple

//enhanced for loop
for(let fruit of fruits){
    console.log(fruit);
}