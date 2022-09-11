---
layout: layouts/post.njk
title: Get a random item and remove it from an array
category: Random
---

**JavaScript version**

```js
const randomItem = (arr) => arr.splice((Math.random() * arr.length) | 0, 1);
```

**TypeScript version**

```js
const randomItem = <T,>(arr: T[]): T => arr.splice((Math.random() * arr.length) | 0, 1) as unknown as T;
```

**Examples**

```js
const arr = [1, 3, 5, 7, 9];
randomItem(arr); // 7
// arr = [1, 3, 5, 9]
```
