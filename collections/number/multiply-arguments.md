---
title: Multiply arguments
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const mul = (...args) => args.reduce((a, b) => a * b);

// Example
mul(1, 2, 3, 4);    // 24
```