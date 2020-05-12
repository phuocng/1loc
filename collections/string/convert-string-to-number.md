~~~ javascript
let int = "10";
int = +int;

console.log(int) // -> 10
console.log(typeof(int)) // -> "number"

// We can convert boolean to number with this trick:

console.log(+true); // -> 1
console.log(+false); // -> 0
~~~
