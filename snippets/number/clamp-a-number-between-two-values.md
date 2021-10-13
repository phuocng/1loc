---
title: Clamp a number between two values
category: Number
---

**JavaScript version**

```js
const clamp = (val, min = 0, max = 1) => Math.max(min, Math.min(max, val));
```

**TypeScript version**

```js
const clamp = (val: number, min: number = 0, max: number = 1): number => Math.max(min, Math.min(max, val));
```

**Examples**

```js
clamp(199, 10, 25); // 25
```
