---
layout: layouts/post.njk
title: Calculate the remainder of division of arguments
category: Number
---

**JavaScript version**

```js
const remainder = (...args) => args.reduce((a, b) => a % b);
```

**TypeScript version**

```js
const remainder = (...args: number[]): number => args.reduce((a, b) => a % b);
```

**Examples**

```js
remainder(1, 2, 3, 4); // 1
```
