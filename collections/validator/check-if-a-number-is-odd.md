~~~ javascript
const isOddWithoutModulo = num => !(Number.isInteger(num/2))

Examples...
isOddWithoutModulo(9) //TRUE
isOddWithoutModulo(99) //TRUE












const isOdd = number => number % 2 !== 0;

// or
const isOdd = number => !!(number & 1);

// Examples
isOdd(1);   // true
isOdd(2);   // false
~~~
