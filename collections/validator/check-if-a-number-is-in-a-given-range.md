~~~ javascript
const inRange = (num, a, b) => (Math.min(a, b) <= num && num < Math.max(a, b));

// Example
inRange(10, 5, 15);         // true
inRange(10, 5, 6);          // false
inRange(10, 15, 5);         // true
inRange(-10, -5, -15);      // true
~~~