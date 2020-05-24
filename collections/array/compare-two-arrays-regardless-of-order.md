~~~ javascript
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort());

// Or
const isEqual = (a, b) => a.length === b.length && a.every((v) => b.includes(v));

// Or
const isEqual = (a, b) => a.length === b.length && (new Set(a.concat(b)).size === a.length);

// Examples
isEqual([1, 2, 3], [1, 2, 3]);      // true
isEqual([1, 2, 3], [1, 3, 2]);      // true
isEqual([1, 2, 3], [1, '2', 3]);    // false
~~~