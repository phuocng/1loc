---
layout: layouts/post.njk
title: Check if an array is subset of other array
category: Validator
---

**JavaScript version**

```js
// Check if `b` is subset of `a`
const isSubset = (a, b) => new Set(b).size === new Set(b.concat(a)).size;

// Or
const isSubset = (a, b) => b.join('|').includes(a.join('|'));
```

**TypeScript version**

```js
const isSubset = <T,_>(a: T[], b: T[]): boolean => new Set(b).size === new Set(b.concat(a)).size;

// Or
const isSubset = <T,_>(a: T[], b: T[]): boolean => b.join('|').includes(a.join('|'));
```

**Examples**

```js
isSubset([1, 2], [1, 2, 3, 4]); // true
isSubset([1, 2, 5], [1, 2, 3, 4]); // false
isSubset([6], [1, 2, 3, 4]); // false
```
