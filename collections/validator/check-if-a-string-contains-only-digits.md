---
title: Check if a string contains only digits
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isNumeric = str => !/[^0-9]/.test(str);

// Examples
isNumeric(2);               // true
isNumeric('23');            // true
isNumeric('00123');         // true

isNumeric('1.23');          // false
isNumeric('-Infinity');     // false
isNumeric('Infinity');      // false
isNumeric('NaN');           // false
```