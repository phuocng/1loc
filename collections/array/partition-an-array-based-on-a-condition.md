~~~ javascript
const partition = (arr, criteria) => arr.reduce((acc, i) => (acc[criteria(i) ? 0 : 1].push(i), acc), [[], []]);

// Example
partition([1, 2, 3, 4, 5], n => n % 2);     // [[2, 4], [1, 3, 5]]
~~~