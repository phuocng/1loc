---
title: Prepend a line number to each line of a text document
category: String
---

**JavaScript version**

```js
const prependNumbers = (str) =>
    str
        .split(/\r?\n/)
        .map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`)
        .join('\n');
```

**TypeScript version**

```js
const prependNumbers = (str: string): string =>
    str
        .split(/\r?\n/)
        .map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`)
        .join('\n');
```

**Examples**

```js
prependNumbers(`one
two
three
four`);

/* Output */
/*
1 one
2 two
3 three
4 four
*/
```
