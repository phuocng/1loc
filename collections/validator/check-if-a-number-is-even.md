~~~ javascript
const isEven = number => number % 2 === 0;

// or
const isEven = number => number & 1 !== 0;

// or
const isEven = number => !(number & 1);
// Examples
isEven(1);      // false
isEven(2);      // true
~~~
