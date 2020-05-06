~~~javascript
//starting array
//const arr =[1,2,3,4,"5","six",false,"6.0",true,7.0];

// using map to convert possible string/floats to number
// [1, 2, 3, 4, 5, NaN, NaN, 6, NaN, 7]

// filter out all the NaN
// [1, 2, 3, 4, 5, 6, 7]
const newArr = arr.map((x)=>parseInt(x)).filter((x)=> !isNaN(x));

~~~