---
layout: layouts/post.njk
title: Check if a number is negative
category: Validator
---

**JavaScript version**

```js
const isNegative = (n) => Math.sign(n) === -1;

// Or
const isNegative = (n) => n < 0;
```

**TypeScript version**

```js
const isNegative = (n: number): boolean => Math.sign(n) === -1;

// Or
const isNegative = (n: number): boolean => n < 0;
```

**Examples**

```js
isNegative(-3); // true
isNegative(8); // false
```
