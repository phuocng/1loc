---
title: Generate a random string from given characters
category: Random
---

**JavaScript version**

```js
const generateString = (length, chars) =>
    Array(length)
        .fill('')
        .map((v) => chars[Math.floor(Math.random() * chars.length)])
        .join('');
```

**TypeScript version**

```js
const generateString = (length: number, chars: string) =>
    Array(length)
        .fill('')
        .map((v) => chars[Math.floor(Math.random() * chars.length)])
        .join('');
```

**Examples**

```js
generateString(10, '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ');
```
