~~~ javascript
const indexOfMax = arr => arr.reduce((prev, curr, i, a) => curr > a[prev] ? i : prev, 0);

// Examples
indexOfMax([1, 3, 9, 7, 5]);        // 2
indexOfMax([1, 3, 7, 7, 5]);        // 2
~~~