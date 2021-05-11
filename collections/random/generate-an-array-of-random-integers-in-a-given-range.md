---
title: Generate an array of random integers in a given range
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const randomArrayInRange = (min, max, n) => Array.from({ length: n }, () => Math.floor(Math.random() * (max - min + 1)) + min);

// Example
randomArrayInRange(1, 100, 10);     // [11, 82, 41, 35, 76, 83, 43, 15, 60, 54]
```