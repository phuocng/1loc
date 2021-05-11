---
title: Round a number to a given number of digits
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const round = (n, decimals = 0) => Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`);

// Examples
round(1.234567, 3);     // 1.235
round(1.234567, 4);     // 1.2346
```