~~~ javascript
const isPowerOfTwo = number => (number & (number - 1)) === 0;

// Examples
isPowerOfTwo(256);      // true
isPowerOfTwo(129);      // false
~~~