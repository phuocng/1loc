---
title: Check if a string contains whitespace
category: Validator
---

**JavaScript version**

```js
const containsWhitespace = (str) => (str) => /\s/.test(str);
```

**TypeScript version**

```js
const containsWhitespace =
    (str: string): boolean =>
    (str) =>
        /\s/.test(str);
```

**Examples**

```js
containsWhitespace('hello world'); // true
```
