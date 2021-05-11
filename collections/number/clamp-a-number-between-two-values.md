---
title: Clamp a number between two values
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));

// Example
clamp(199, 10, 25);     // 25
```