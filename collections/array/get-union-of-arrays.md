---
title: Get union of arrays
category: Array
---

```js
const union = (...arr) => [...new Set(arr.flat())];

// Example
union([1, 2], [2, 3], [3]); // [1, 2, 3]
```
