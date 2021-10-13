---
title: Convert decimal to binary recursively
category: Number
---

**JavaScript version**

```js
const decToBi = (num) => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));
```

**TypeScript version**

```js
const decToBi = (num: number): number => (num === 0 ? 0 : (num % 2) + 10 * decToBi(~~(num / 2)));
```

**Examples**

```js
decToBi(10); //1010
```
