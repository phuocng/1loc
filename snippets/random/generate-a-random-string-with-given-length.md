---
title: Generate a random string with given length
category: Random
---

**JavaScript version**

```js
const generateString = (length) =>
    Array(length)
        .fill('')
        .map((v) => Math.random().toString(36).charAt(2))
        .join('');
```

**TypeScript version**

```js
const generateString = (length: number): string =>
    Array(length)
        .fill('')
        .map((v) => Math.random().toString(36).charAt(2))
        .join('');
```
