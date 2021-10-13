---
title: Swap case of characters in a string
category: String
---

**JavaScript version**

```js
const swapCase = (str) =>
    str
        .split('')
        .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
        .join('');
```

**TypeScript version**

```js
const swapCase = (str: string): string =>
    str
        .split('')
        .map((c) => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase()))
        .join('');
```

**Examples**

```js
swapCase('Hello World'); // 'hELLO wORLD'
```
