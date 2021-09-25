---
title: Check if a value is a number
category: Validator
---

```js
const isNumber = (value) => !isNaN(parseFloat(value)) && isFinite(value);
```
