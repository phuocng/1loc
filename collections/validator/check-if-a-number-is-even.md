~~~ javascript
const isEven = number => number % 2 === 0;

// Or
const isEven = number => (number & 1) === 0;

// Or
const isEven = number => !(number & 1);

// Or
const isEven = number => Number.isInteger(number / 2);

// Examples
isEven(1);      // false
isEven(2);      // true
~~~
