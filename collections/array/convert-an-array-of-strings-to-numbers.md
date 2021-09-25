---
title: Convert an array of strings to numbers
category: Array
---

```js
const toNumbers = (arr) => arr.map(Number);

// Or
const toNumbers = (arr) => arr.map((x) => +x);

// Example
toNumbers(['2', '3', '4']); // [2, 3, 4]
```
