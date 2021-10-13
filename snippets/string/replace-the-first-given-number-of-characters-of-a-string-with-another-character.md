---
title: Replace the first given number of characters of a string with another character
category: String
---

**JavaScript version**

```js
const mask = (str, num, mask) => `${str}`.slice(num).padStart(`${str}`.length, mask);
```

**TypeScript version**

```js
const mask = (str: string, num: number, mask: string): string => `${str}`.slice(num).padStart(`${str}`.length, mask);
```

**Examples**

```js
mask(1234567890, 3, '*'); // ***4567890
```
