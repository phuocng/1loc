~~~ javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

// gcd(10, 15) === 5
~~~