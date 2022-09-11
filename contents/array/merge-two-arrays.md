---
layout: layouts/post.njk
title: Merge two arrays
category: Array
---

**JavaScript version**

```js
// Merge but don't remove the duplications
const merge = (a, b) => a.concat(b);
// Or
const merge = (a, b) => [...a, ...b];

// Merge and remove the duplications
const merge = (a, b) => [...new Set(a.concat(b))];
// Or
const merge = (a, b) => [...new Set([...a, ...b])];
```

**TypeScript version**

```js
// Merge but don't remove the duplications
const merge = <T,_>(a: T[], b: T[]): T[] => a.concat(b);
// Or
const merge = <T,_>(a: T[], b: T[]): T[] => [...a, ...b];

// Merge and remove the duplications
const merge = <T,_>(a: T[], b: T[]): T[] => [...new Set(a.concat(b))];
// Or
const merge = <T,_>(a: T[], b: T[]): T[] => [...new Set([...a, ...b])];
```
