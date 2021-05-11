---
title: Check if an array contains a value matching some criterias
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const contains = (arr, criteria) => arr.some(v => criteria(v));

// Or
const contains = (arr, criteria) => arr.some(criteria);

// Or
const contains = (arr,criteria) => arr.filter(criteria).length > 0;

// Examples
contains([10, 20, 30], v => v > 25 );               // true
contains([10, 20, 30], v => v > 100 || v < 15 );    // true
contains([10, 20, 30], v => v > 100 );              // false
```
