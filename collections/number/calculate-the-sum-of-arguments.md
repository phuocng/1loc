---
title: Calculate the sum of arguments
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const sum = (...args) => args.reduce((a, b) => a + b);

// Example
sum(1, 2, 3, 4);    // 10
```