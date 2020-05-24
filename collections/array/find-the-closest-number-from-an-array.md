~~~ javascript
// Find the number from `arr` which is closest to `n`
const closest = (arr, n) => arr.reduce((prev, curr) => Math.abs(curr - n) < Math.abs(prev - n) ? curr : prev);

// Or
const closest = (arr, n) => arr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n))[0];

// Example
closest([29, 87, 8, 78, 97, 20, 75, 33, 24, 17], 50);   // 33
~~~