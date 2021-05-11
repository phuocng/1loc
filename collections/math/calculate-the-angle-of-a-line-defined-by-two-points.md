---
title: Calculate the angle of a line defined by two points
category: Math
tags:
  - posts
layout: layouts/post.njk
---

```js
// In radians
const radiansAngle = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x);

// In degrees
const degreesAngle = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180 / Math.PI;
```