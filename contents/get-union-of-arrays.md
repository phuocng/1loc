---
layout: layouts/post.njk
title: Get union of arrays
category: Array
---

**JavaScript version**

```js
const union = (...arr) => [...new Set(arr.flat())];
```

**TypeScript version**

```js
const union = <T,_>(...arr: T[][]): T[] => [...new Set(arr.flat())];
```

**Example**

```js
union([1, 2], [2, 3], [3]); // [1, 2, 3]
```
