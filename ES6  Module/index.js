//ES6 Module = An external file that contains reusable code that 
//          can be imported into other JavaScript files.
//          Write reusable code for many different apps.
//          Can contain variables, functions, classes, and objects.

import {PI, getCircumference, getArea, getVolume} from  './mathUtil.js';

console.log(PI);

const circumference = getCircumference(8);
console.log(`${circumference.toFixed(2)}cm`);

const area = getArea(8);
console.log(`${area.toFixed(2)}cm²`);

const volume = getVolume(8);
console.log(`${volume.toFixed(2)}cm³`);