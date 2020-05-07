~~~ javascript
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);

/*
const isEven = arr => arr.filter(x => x % 2 === 0);

const isPositive = arr => arr.filter(x => x > 0);

// Find all positive and even numbers in `arr`
const find = compose(isEven, isPositive);
// find([-5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5]) returns [2, 4]
*/
~~~