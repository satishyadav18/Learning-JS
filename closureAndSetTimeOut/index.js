//closure = A closure is a function that has access to the outer
//          function's scope even after the outer function has returned.
//          In JavaScript, closures are created every time a function is created, 
//         used frequently in JS frameworks and libraries.
//          Closures are used to create private variables and functions.

let score = 0;

function increaseScore(points) {
  score += points;
  console.log(`+${points}pts`);
}

function decreaseScore(points) {
    score -= points;
    console.log(`-${points}pts`);   
}

function showScore() {
    console.log(`Score: ${score}`);
}

increaseScore(10); 
showScore(); // Score: 10
increaseScore(5);
showScore(); // Score: 15
decreaseScore(5);       
showScore(); // Score: 10
decreaseScore(5);       
showScore(); // Score: 5
decreaseScore(10);  
showScore(); // Score: -5





function makeCounter() {
  let count = 0; // private variable
  return function() {
    count++;
    return count;
  }
}
const counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3



//SetTimeout function

const wish = () => {
  console.log("Hello");
};
console.log("World");
setTimeout(wish, 3000); // prints "Hello" after 2 seconds


setTimeout(function(){window.alert("Hello")}, 2000); // prints "Hello" after 2 seconds