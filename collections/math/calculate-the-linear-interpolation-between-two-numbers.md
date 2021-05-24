---
title: Calculate the linear interpolation between two numbers
category: Math
tags:
  - posts
layout: layouts/post.njk
---

```js
const lerp = (a, b, amount) => (1 - amount) * a + amount * b;
```