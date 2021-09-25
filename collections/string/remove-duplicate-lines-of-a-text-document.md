---
title: Remove duplicate lines of a text document
category: String
---

```js
const removeDuplicateLines = (str) => Array.from(new Set(str.split(/\r?\n/))).join('\n');

// Example
removeDuplicateLines(`one
three
two
three
one
four`);

/* Output */
/*
one
three
two
four
*/
```
