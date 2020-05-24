~~~ javascript
const areEqual = arr => arr.length > 0 && arr.every(item => item === arr[0]);

// Or
const areEqual = arr => new Set(arr).size === 1;

// Examples
areEqual([1, 2, 3, 4]);                 // false
areEqual(['hello', 'hello', 'hello']);  // true
~~~