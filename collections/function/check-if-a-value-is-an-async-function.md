---
title: Check if a value is an async function
category: Function
---

```js
const isAsyncFunction = (v) => Object.prototype.toString.call(v) === '[object AsyncFunction]';

// Examples
isAsyncFunction(function () {}); // false
isAsyncFunction(function* () {}); // false
isAsyncFunction(async function () {}); // true
```
