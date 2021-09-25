---
title: Check if a number is a power of 2
category: Validator
---

```js
const isPowerOfTwo = (number) => (number & (number - 1)) === 0;

// Examples
isPowerOfTwo(256); // true
isPowerOfTwo(129); // false
```
