---
title: Calculate the remainder of division of arguments
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const remainder = (...args) => args.reduce((a, b) => a % b);

// Example
remainder(1, 2, 3, 4);      // 1
```