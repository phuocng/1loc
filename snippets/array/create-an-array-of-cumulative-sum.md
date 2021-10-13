---
title: Create an array of cumulative sum
category: Array
---

**JavaScript version**

```js
const accumulate = (arr) =>
    arr.map(
        (
            (sum) => (value) =>
                (sum += value)
        )(0)
    );

// Or
const accumulate = (arr) => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
```

**TypeScript version**

```js
const accumulate = (arr: number[]): number[] =>
    arr.map(
        (
            (sum) => (value: number) =>
                (sum += value)
        )(0)
    );

// Or
const accumulate = (arr: number[]): number[] => arr.reduce((a, b, i) => (i === 0 ? [b] : [...a, b + a[i - 1]]), [0]);
```

**Example**

```js
accumulate([1, 2, 3, 4]); // [1, 3, 6, 10]
// 1             = 1
// 1 + 2         = 3
// 1 + 2 + 3     = 6
// 1 + 2 + 3 + 4 = 10
```
