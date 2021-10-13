---
title: Get all subsets of an array
category: Array
---

**JavaScript version**

```js
const getSubsets = (arr) => arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]]);
```

**TypeScript version**

```js
const getSubsets = <T,>(arr: T[]): T[][] => (
    arr.reduce((prev, curr) => prev.concat(prev.map((k) => k.concat(curr))), [[]] as T[][])
);
```

**Examples**

```js
getSubsets([1, 2]); // [[], [1], [2], [1, 2]]
getSubsets([1, 2, 3]); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]
```
