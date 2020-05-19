~~~ javascript
const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

// Example
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);     // returns [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 4);     // returns [[1, 2, 3, 4], [5, 6, 7, 8]]
~~~