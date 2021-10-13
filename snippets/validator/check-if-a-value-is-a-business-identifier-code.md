---
title: Check if a value is a business identifier code
category: Validator
---

**JavaScript version**

```js
const isBIC = (value) => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
```

**TypeScript version**

```js
const isBIC = (value: string): boolean => /^[a-zA-Z]{6}[a-zA-Z0-9]{2}([a-zA-Z0-9]{3})?$/.test(value);
```
