---
layout: layouts/post.njk
title: Compute the greatest common divisor between two numbers
category: Number
---

**JavaScript version**

```js
const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
```

**TypeScript version**

```js
const gcd = (a: number, b: number): number => (b === 0 ? a : gcd(b, a % b));
```

**Examples**

```js
gcd(10, 15); // 5
```
