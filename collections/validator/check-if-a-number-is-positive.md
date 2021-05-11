---
title: Check if a number is positive
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isPositive = number => Math.sign(number) === 1;

// Examples
isPositive(3);      // true
isPositive(-8);     // false
```