---
title: Calculate the mod of collection index
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const mod = (a, b) => ((a % b) + b) % b;

// Examples
mod(-1, 5);     // 4
mod(3, 5);      // 3
mod(6, 5);      // 1
```