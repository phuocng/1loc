---
title: Curry a function
category: Function
tags:
  - posts
layout: layouts/post.njk
---

```js
const curry = (fn, ...args) => fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);

// Example
const sum = (a, b, c) => a + b + c;
curry(sum)(1)(2)(3);    // 6
curry(sum)(1, 2, 3);    // 6
curry(sum, 1)(2, 3);    // 6
curry(sum, 1)(2)(3);    // 6
curry(sum, 1, 2)(3);    // 6
curry(sum, 1, 2, 3);    // 6
```