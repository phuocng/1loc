---
title: Calculate the angle of a line defined by two points
category: Math
---

**JavaScript version**

```js
// In radians
const radiansAngle = (p1, p2) => Math.atan2(p2.y - p1.y, p2.x - p1.x);

// In degrees
const degreesAngle = (p1, p2) => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
```

**TypeScript version**

```js
interface Point {
    x: number;
    y: number;
}

const radiansAngle = (p1: Point, p2: Point): number => Math.atan2(p2.y - p1.y, p2.x - p1.x);

const degreesAngle = (p1: Point, p2: Point): number => (Math.atan2(p2.y - p1.y, p2.x - p1.x) * 180) / Math.PI;
```
