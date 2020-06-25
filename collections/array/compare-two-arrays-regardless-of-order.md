~~~ javascript
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify(a.sort()) === JSON.stringify(b.sort());

// Examples
isEqual([1, 2, 3], [1, 2, 3]);      // true
isEqual([1, 2, 3], [1, 3, 2]);      // true
isEqual([1, 2, 3], [1, '2', 3]);    // false
~~~
