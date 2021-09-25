---
title: Create a function that accepts a single argument
category: Function
---

```js
const unary = (fn) => (arg) => fn(arg);

// Example
['1', '2', '3', '4', '5'].map(unary(parseInt)); // [1, 2, 3, 4, 5]
```
