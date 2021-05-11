---
title: Calculate the distance between two points
category: Math
tags:
  - posts
layout: layouts/post.njk
---

```js
const distance = (p1, p2) => Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
```