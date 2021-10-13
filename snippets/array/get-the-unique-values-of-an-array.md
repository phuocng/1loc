---
title: Get the unique values of an array
category: Array
---

**JavaScript version**

```js
const unique = (arr) => [...new Set(arr)];

// Or
const unique = (arr) => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
const unique = (arr) => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), []);
```

**TypeScript version**

```js
const unique = <T,>(arr: T[]): T[] => [...new Set(arr)];

// Or
const unique = <T,>(arr: T[]): T[] => arr.filter((el, i, array) => array.indexOf(el) === i);

// Or
const unique = <T,>(arr: T[]): T[] => arr.reduce((acc, el) => (acc.includes(el) ? acc : [...acc, el]), [] as T[]);
```
