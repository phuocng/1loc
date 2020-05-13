~~~ javascript
const isObject = v => (v !== null && typeof v === 'object');

// isObject(null) === false
// isObject('hello world') === false
// isObject({}) === true
// isObject([]) === true 
~~~
