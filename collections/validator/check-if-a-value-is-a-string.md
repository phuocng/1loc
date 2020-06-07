~~~ javascript
const isString = value => Object.prototype.toString.call(value) === '[object String]';

// Examples
isString('hello world');                // true
isString(new String('hello world'));    // true
isString(10);                           // false
~~~