~~~ javascript
const isObject = v => (v !== null && typeof v === 'object');

// Examples
isObject(null);             // false
isObject('hello world');    // false

isObject({});               // true
isObject([]);               // true 
~~~