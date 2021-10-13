---
title: Convert a number to equivalent characters
category: Number
---

**JavaScript version**

```js
const toChars = (n) => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
```

**TypeScript version**

```js
const toChars = (n: number): string => `${n >= 26 ? toChars(Math.floor(n / 26) - 1) : ''}${'ABCDEFGHIJKLMNOPQRSTUVWXYZ'[n % 26]}`;
```

**Examples**

```js
toChars(0); // A
toChars(1); // B
toChars(25); // Z

toChars(26); // AA
toChars(27); // AB
toChars(51); // AZ

toChars(701); // ZZ
toChars(702); // AAA
toChars(703); // AAB
```
