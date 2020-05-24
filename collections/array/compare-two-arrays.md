~~~ javascript
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const isEqual = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// Examples
isEqual([1, 2, 3], [1, 2, 3]);      // true
isEqual([1, 2, 3], [1, '2', 3]);    // false
~~~