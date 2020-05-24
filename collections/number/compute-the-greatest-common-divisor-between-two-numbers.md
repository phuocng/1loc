~~~ javascript
const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);

// Example
gcd(10, 15);    // 5
~~~