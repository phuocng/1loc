---
title: Replace the first given number of characters of a string with another character
category: String
---

```js
const mask = (str, num, mask) => `${str}`.slice(num).padStart(`${str}`.length, mask);

// Example
mask(1234567890, 3, '*'); // ***4567890
```
