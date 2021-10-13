---
title: Find the index of the maximum item of an array
category: Array
---

**JavaScript version**

```js
const indexOfMax = (arr) => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
```

**TypeScript version**

```js
const indexOfMax = (arr: number[]): number => arr.reduce((prev, curr, i, a) => (curr > a[prev] ? i : prev), 0);
```

**Examples**

```js
indexOfMax([1, 3, 9, 7, 5]); // 2
indexOfMax([1, 3, 7, 7, 5]); // 2
```
