~~~ javascript
const unary = fn => arg => fn(arg);

// Example
['1', '2', '3', '4', '5'].map(unary(parseInt));     // [1, 2, 3, 4, 5]
~~~