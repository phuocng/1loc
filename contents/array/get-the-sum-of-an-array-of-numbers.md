---
layout: layouts/post.njk
title: Get the sum of an array of numbers
category: Array
---

**JavaScript version**

```js
const sum = (arr) => arr.reduce((a, b) => a + b, 0);
```

**TypeScript version**

```js
const sum = (arr: number[]): number => arr.reduce((a, b) => a + b, 0);
```
