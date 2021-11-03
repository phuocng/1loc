---
title: Check if a value is a number
category: Validator
---

**JavaScript version**

```js
const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);
```

**TypeScript version**

```js
const isNumber = (value: any): number => !isNaN(parseFloat(value)) && isFinite(value);
```
