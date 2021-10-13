---
title: Check if a value is base32 encoded
category: Validator
---

**JavaScript version**

```js
const isBase32 = (value) => value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value);
```

**TypeScript version**

```js
const isBase32 = (value: string): boolean => value.length % 8 === 0 && /^[A-Z2-7]+=*$/.test(value);
```
