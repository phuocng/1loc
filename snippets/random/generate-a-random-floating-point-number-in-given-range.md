---
title: Generate a random floating point number in given range
category: Random
---

**JavaScript version**

```js
const randomFloat = (min, max) => Math.random() * (max - min) + min;
```

**TypeScript version**

```js
const randomFloat = (min: number, max: number): number => Math.random() * (max - min) + min;
```
