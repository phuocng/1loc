---
title: Check if an array is empty
category: Array
---

**JavaScript version**

```js
// `arr` is an array
const isEmpty = (arr) => !Array.isArray(arr) || arr.length === 0;
```

**TypeScript version**

```js
const isEmpty = <T,_>(arr: T[]): boolean => !Array.isArray(arr) || arr.length === 0;
```

**Examples**

```js
isEmpty([]); // true
isEmpty([1, 2, 3]); // false
```
