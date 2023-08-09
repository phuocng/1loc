---
layout: layouts/post.njk
title: Check if a number is odd
category: Validator
---

**JavaScript version**

```js
const isOdd = (n) => n % 2 !== 0;

// Or
const isOdd = (n) => !!(n & 1);

// Or
const isOdd = (n) => !Number.isInteger(n / 2);
```

**TypeScript version**

```js
const isOdd = (n: number): boolean => n % 2 !== 0;

// Or
const isOdd = (n: number): boolean => !!(n & 1);

// Or
const isOdd = (n: number): boolean => !Number.isInteger(n / 2);
```

**Examples**

```js
isOdd(1); // true
isOdd(2); // false
```
