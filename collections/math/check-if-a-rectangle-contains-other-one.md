---
title: Check if a rectangle contains other one
category: Math
tags:
  - posts
layout: layouts/post.njk
---

```js
// Returns true if `a` contains `b`
// (x1, y1) and (x2, y2) are top-left and bottom-right corners
const contains = (a, b) => (a.x1 <= b.x1 && a.y1 <= b.y1 && a.x2 >= b.x2 && a.y2 >= b.y2);
```