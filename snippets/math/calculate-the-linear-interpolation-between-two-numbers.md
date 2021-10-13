---
title: Calculate the linear interpolation between two numbers
category: Math
---

**JavaScript version**

```js
const lerp = (a, b, amount) => (1 - amount) * a + amount * b;
```

**TypeScript version**

```js
const lerp = (a: number, b: number, amount: number): number => (1 - amount) * a + amount * b;
```
