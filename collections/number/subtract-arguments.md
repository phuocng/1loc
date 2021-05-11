---
title: Subtract arguments
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const subtract = (...args) => args.reduce((a, b) => a - b);

// Example
subtract(1, 2, 3, 4);       // -8
```