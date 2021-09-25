---
title: Check if a value is a regular expression
category: Validator
---

```js
const isRegExp = (value) => Object.prototype.toString.call(value) === '[object RegExp]';
```
