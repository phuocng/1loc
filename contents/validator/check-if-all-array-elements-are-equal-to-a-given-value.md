---
layout: layouts/post.njk
title: Check if all array elements are equal to a given value
category: Validator
---

**JavaScript version**

```js
const isEqual = (arr, value) => arr.every((item) => item === value);

// Or
// Ends earlier for false arrays
const isEqual = (arr, value) => !arr.some((item) => item !== value);
```

**TypeScript version**

```js
const isEqual = <T,_>(arr: T[], value: T): boolean => arr.every((item) => item === value);

// Or
const isEqual = <T,_>(arr: T[], value: T): boolean => !arr.some((item) => item !== value);
```

**Examples**

```js
isEqual(['foo', 'foo'], 'foo'); // true
isEqual(['foo', 'bar'], 'foo'); // false
isEqual(['bar', 'bar'], 'foo'); // false
```
