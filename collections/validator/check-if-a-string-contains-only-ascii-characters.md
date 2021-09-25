---
title: Check if a string contains only ASCII characters
category: Validator
---

```js
const isAscii = (str) => /^[\x00-\x7F]+$/.test(str);
```
