---
title: Reverse the order of lines of a text
category: String
---

**JavaScript version**

```js
const reverseLines = (str) => str.split(/\r?\n/).reverse().join('\n');
```

**TypeScript version**

```js
const reverseLines = (str: string): string => str.split(/\r?\n/).reverse().join('\n');
```

**Examples**

```js
reverseLines(`one
two
three`);

/* Output */
/*
three
two
one
*/
```
