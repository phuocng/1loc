---
title: Check if a value is an object
category: Validator
---

```js
const isObject = (v) => v !== null && typeof v === 'object';

// Examples
isObject(null); // false
isObject('hello world'); // false

isObject({}); // true
isObject([]); // true
```
