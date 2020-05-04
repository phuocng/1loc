~~~ javascript
const areEqual = arr => [...new Set(arr)].length === 1;
// areEqual([1, 2, 3, 4]) === false
// areEqual(['hello', 'hello', 'hello']) === true
~~~
