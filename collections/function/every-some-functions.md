~~~ javascript
const arr = [ 2, 28, 9, 1, 15 ];
const arrBis = [ -5, 13, 26, 18, 12 ];

// Test function
const isPositive = (number) => number > 0;

// Test if every element of array match the isPositive function
arr.every(isPositive); // -> true
arrBis.every(isPositive); // -> false

// Test if some element of array match isPositive function
arr.some(isPositive); // -> true
arrBis.some(isPositive); // -> true
~~~
