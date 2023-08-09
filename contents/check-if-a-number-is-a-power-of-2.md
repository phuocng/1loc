---
layout: layouts/post.njk
title: Check if a number is a power of 2
category: Validator
---

**JavaScript version**

```js
const isPowerOfTwo = (n) => (n & (n - 1)) === 0;
```

**TypeScript version**

```js
const isPowerOfTwo = (n: number): boolean => (n & (n - 1)) === 0;
```

**Examples**

```js
isPowerOfTwo(256); // true
isPowerOfTwo(129); // false
```
