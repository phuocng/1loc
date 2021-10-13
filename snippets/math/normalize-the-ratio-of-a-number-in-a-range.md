---
title: Normalize the ratio of a number in a range
category: Math
---

**JavaScript version**

```js
const normalizeRatio = (value, min, max) => (value - min) / (max - min);
```

**TypeScript version**

```js
const normalizeRatio = (value: number, min: number, max: number): number => (value - min) / (max - min);
```
