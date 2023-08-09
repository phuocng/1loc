---
layout: layouts/post.njk
title: Check if an array contains a value matching some criterias
category: Validator
---

**JavaScript version**

```js
const contains = (arr, criteria) => arr.some((v) => criteria(v));

// Or
const contains = (arr, criteria) => arr.some(criteria);

// Or
const contains = (arr, criteria) => arr.filter(criteria).length > 0;
```

**TypeScript version**

```js
const contains = <T,_>(arr: T[], criteria: (a: T) => boolean): boolean => arr.some((v) => criteria(v));

// Or
const contains = <T,_>(arr: T[], criteria: (a: T) => boolean): boolean => arr.some(criteria);

// Or
const contains = <T,_>(arr: T[], criteria: (a: T) => boolean): boolean => arr.filter(criteria).length > 0;
```

**Examples**

```js
contains([10, 20, 30], (v) => v > 25); // true
contains([10, 20, 30], (v) => v > 100 || v < 15); // true
contains([10, 20, 30], (v) => v > 100); // false
```
