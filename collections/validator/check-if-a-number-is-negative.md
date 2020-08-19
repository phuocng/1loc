~~~ javascript
const isNegative = number => Math.sign(number) === -1;

// Or
const isNegative = number => number < 0;

// Examples
isNegative(-3);     // true
isNegative(8);      // false
~~~
