---
title: Remove duplicate lines of a text document
category: String
---

**JavaScript version**

```js
const removeDuplicateLines = (str) => Array.from(new Set(str.split(/\r?\n/))).join('\n');
```

**TypeScript version**

```js
const removeDuplicateLines = (str: string): string => Array.from(new Set(str.split(/\r?\n/))).join('\n');
```

**Examples**

```js
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
