~~~ javascript
const lastIndex = (arr, predicate) => arr.reduce((prev, curr, index) => predicate(curr) ? index : prev, -1);

// Or
const lastIndex = (arr, predicate) => arr.map(item => predicate(item)).lastIndexOf(true);

// Example
lastIndex([1, 3, 5, 7, 9, 2, 4, 6, 8], i => i % 2 === 1);   // 4
lastIndex([1, 3, 5, 7, 9, 8, 6, 4, 2], i => i > 6);         // 5
~~~