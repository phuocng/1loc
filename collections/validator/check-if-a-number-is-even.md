~~~ javascript
const isEvenWithoutModulo = num => Number.isInteger(num/2)

Examples...
isEvenWithoutModulo(10) //TRUE
isEvenWithoutModulo(28) //TRUE










const isEven = number => number % 2 === 0;

// or
const isEven = number => number & 1 !== 0;

// or
const isEven = number => !(number & 1);
// Examples
isEven(1);      // false
isEven(2);      // true
~~~
