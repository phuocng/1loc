---
title: Check if a string contains lower case characters
category: Validator
---

```js
const containsLowerCase = (str) => str !== str.toUpperCase();

// Examples
containsLowerCase('Hello World'); // true
containsLowerCase('HELLO WORLD'); // false
```
