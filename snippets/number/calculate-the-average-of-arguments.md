---
title: Calculate the average of arguments
category: Number
---

**JavaScript version**

```js
const average = (...args) => args.reduce((a, b) => a + b) / args.length;
```

**TypeScript version**

```js
const average = (...args: number[]): number => args.reduce((a, b) => a + b) / args.length;
```

**Examples**

```js
average(1, 2, 3, 4); // 2.5
```
