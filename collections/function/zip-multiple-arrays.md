~~~ javascript
const zip = (...arr) => Array.from({ length: Math.max(...arr.map(a => a.length)) }, (_, i) => arr.map(a => a[i]));

// Example
// zip(['a', 'b', 'c'], [1, 2, 3], ['x', 'y', 'z']) returns [['a', 1, 'x'], ['b', 2, 'y'], ['c', 3, 'z']]
~~~
