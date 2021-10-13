---
title: Check if a value is a regular expression
category: Validator
---

**JavaScript version**

```js
const isRegExp = (value) => Object.prototype.toString.call(value) === '[object RegExp]';
```

**TypeScript version**

```js
const isRegExp = (value: any): boolean => Object.prototype.toString.call(value) === '[object RegExp]';
```
