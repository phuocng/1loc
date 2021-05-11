---
title: Check if a number is odd
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isOdd = number => number % 2 !== 0;

// Or
const isOdd = number => !!(number & 1);

// Or
const isOdd = number => !Number.isInteger(number / 2);

// Examples
isOdd(1);   // true
isOdd(2);   // false
```
