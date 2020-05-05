~~~ javascript
// Using stringify
// `a` and `b` are arrays
const compare = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// Or
const compare = (a, b) => a.length === b.length && a.every((v, i) => v === b[i]);

// compare([1, 2, 3], [1, 2, 3]) === true
// compare([1, 2, 3], [1, '2', 3]) === false
~~~
