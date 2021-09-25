---
title: Check if an array is empty
category: Array
---

```js
// `arr` is an array
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;

// Examples
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```
