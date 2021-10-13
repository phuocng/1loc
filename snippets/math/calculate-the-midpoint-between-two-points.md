---
title: Calculate the midpoint between two points
category: Math
---

**JavaScript version**

```js
const midpoint = (p1, p2) => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
```

**TypeScript version**

```js
interface Point {
    x: number;
    y: number;
}

const midpoint = (p1: Point, p2: Point): number[] => [(p1.x + p2.x) / 2, (p1.y + p2.y) / 2];
```
