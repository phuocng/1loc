---
title: Check if a point is inside a rectangle
category: Math
tags:
  - posts
layout: layouts/post.njk
---

```js
const isInside = (point, rect) => point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom;
```