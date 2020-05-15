~~~ javascript
const isAsyncFunction = v => Object.prototype.toString.call(v) === '[object AsyncFunction]';

// Example
isAsyncFunction(function() {});         // false
isAsyncFunction(function*() {});        // false
isAsyncFunction(async function() {});   // true
~~~