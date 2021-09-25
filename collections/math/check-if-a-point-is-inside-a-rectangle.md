---
title: Check if a point is inside a rectangle
category: Math
---

```js
const isInside = (point, rect) =>
    point.x > rect.left && point.x < rect.right && point.y > rect.top && point.y < rect.bottom;
```
