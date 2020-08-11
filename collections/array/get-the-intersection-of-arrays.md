~~~ javascript
const getIntersection = (a, ...arr) => [...new Set(a)].filter(v => arr.every(b => b.includes(v)));

// Examples
getIntersection([1, 2, 3], [2, 3, 4, 5]);               // [2, 3]
getIntersection([1, 2, 3], [2, 3, 4, 5], [1, 3, 5]);    // [3]
~~~
