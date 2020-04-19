~~~ javascript
const areEqual = arr => arr.length > 0 && arr.every(item => item === arr[0]);
// areEqual([1, 2, 3, 4]) === false
// areEqual(['hello', 'hello', 'hello']) === true
~~~