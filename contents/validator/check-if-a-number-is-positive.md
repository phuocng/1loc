---
layout: layouts/post.njk
title: Check if a number is positive
category: Validator
---

**JavaScript version**

```js
const isPositive = (n) => Math.sign(n) === 1;
```

**TypeScript version**

```js
const isPositive = (n: number): boolean => Math.sign(n) === 1;
```

**Examples**

```js
isPositive(3); // true
isPositive(-8); // false
```
