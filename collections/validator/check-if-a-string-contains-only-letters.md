---
title: Check if a string contains only letters
category: Validator
---

```js
const isAlpha = (str) => /^[A-Z]+$/i.test(str);

// Examples
isAlpha('helloworld'); // true
isAlpha('HelloWorld'); // true
isAlpha('hello world'); // false
isAlpha('0123456789'); // false
```
