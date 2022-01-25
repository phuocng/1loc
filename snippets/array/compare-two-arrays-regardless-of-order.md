---
title: Compare two arrays regardless of order
category: Array
---

**JavaScript version**

```js
// `a` and `b` are arrays
const isEqual = (a, b) => JSON.stringify([...new Set(a)].sort()) === JSON.stringify([...new Set(b)].sort());
```

**TypeScript version**

```js
const isEqual = <T,_>(a: T[], b: T[]): boolean => JSON.stringify([...(new Set(a))].sort()) === JSON.stringify([...(new Set(b))].sort());
```

**Examples**

```js
isEqual([1, 2, 3], [1, 2, 3]); // true
isEqual([1, 2, 3], [1, 3, 2]); // true
isEqual([1, 2, 3], [1, '2', 3]); // false
```
