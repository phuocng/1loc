---
title: Round a number to the nearest multiple of a given value
category: Math
tags:
  - posts
layout: layouts/post.njk
---

```js
const roundNearest = (value, nearest) => Math.round(value / nearest) * nearest;

// Examples
roundNearest(100, 30);      // 90
roundNearest(200, 30);      // 210
roundNearest(200, 40);      // 200
```