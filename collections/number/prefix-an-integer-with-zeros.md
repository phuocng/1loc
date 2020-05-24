~~~ javascript
const prefixWithZeros = (number, length) => (number / Math.pow(10, length)).toFixed(length).substr(2);

// Or
const prefixWithZeros = (number, length) => `${Array(length).join('0')}${number}`.slice(-length);

// Or
const prefixWithZeros = (number, length) => String(number).padStart(length, '0');

// Example
prefixWithZeros(42, 5);     // '00042'
~~~