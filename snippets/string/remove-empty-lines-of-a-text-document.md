---
title: Remove empty lines of a text document
category: String
---

**JavaScript version**

```js
const removeEmptyLines = (str) =>
    str
        .split(/\r?\n/)
        .filter((line) => line.trim() !== '')
        .join('\n');
```

**TypeScript version**

```js
const removeEmptyLines = (str: string): string =>
    str
        .split(/\r?\n/)
        .filter((line) => line.trim() !== '')
        .join('\n');
```

**Examples**

```js
removeEmptyLines(`red

green
blue

yellow`);

/* Output */
/*
red
green
blue
yellow
*/
```
