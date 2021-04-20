~~~ javascript
const indexOfMin = arr => arr.reduce((prev, curr, i, a) => curr < a[prev] ? i : prev, 0);

// Examples
indexOfMin([6, 4, 8, 2, 10]);       // 3
indexOfMin([6, 4, 2, 2, 10]);       // 2
~~~