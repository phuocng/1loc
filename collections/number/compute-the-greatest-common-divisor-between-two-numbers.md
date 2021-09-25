---
title: Compute the greatest common divisor between two numbers
category: Number
---

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));

// Example
gcd(10, 15); // 5
```
