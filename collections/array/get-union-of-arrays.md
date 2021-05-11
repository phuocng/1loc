---
title: Get union of arrays
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const union = (...arr) => [...new Set(arr.flat())];

// Example
union([1, 2], [2, 3], [3]);     // [1, 2, 3]
```