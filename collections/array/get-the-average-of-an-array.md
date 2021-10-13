---
title: Get the average of an array
category: Array
---

**JavaScript version**

```js
const average = (arr) => arr.reduce((a, b) => a + b, 0) / arr.length;
```

**TypeScript version**

```js
const average = (arr: number[]): number => arr.reduce((a, b) => a + b, 0) / arr.length;
```
