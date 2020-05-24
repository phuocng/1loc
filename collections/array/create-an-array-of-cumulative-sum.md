~~~ javascript
const accumulate = arr => arr.map((sum => value => sum += value)(0));

// Or
const accumulate = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], []);

// Or
const accumulate = arr => arr.reduce((a, b, i) => i === 0 ? [b] : [...a, b + a[i - 1]], 0);

// Example
accumulate([1, 2, 3, 4]);   // [1, 3, 6, 10]
// 1             = 1
// 1 + 2         = 3
// 1 + 2 + 3     = 6
// 1 + 2 + 3 + 4 = 10
~~~