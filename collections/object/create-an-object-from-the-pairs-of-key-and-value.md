~~~ javascript
const toObj = arr => Object.fromEntries(arr)

// Or
const toObj = arr => arr.reduce((a, c) => ((a[c[0]] = c[1]), a), {});

// Example
toObj([['a', 1], ['b', 2], ['c', 3]]);      // { a: 1, b: 2, c: 3 }
~~~