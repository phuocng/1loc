---
title: Check if an object is a Promise
category: Validator
---

```js
const isPromise = (obj) =>
    !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
```
