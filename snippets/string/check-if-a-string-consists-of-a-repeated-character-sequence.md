---
title: Check if a string consists of a repeated character sequence
category: String
---

**JavaScript version**

```js
const consistsRepeatedSubstring = (str) => `${str}${str}`.indexOf(str, 1) !== str.length;
```

**TypeScript version**

```js
const consistsRepeatedSubstring = (str: string): boolean => `${str}${str}`.indexOf(str, 1) !== str.length;
```

**Examples**

```js
consistsRepeatedSubstring('aa'); // true
consistsRepeatedSubstring('aaa'); // true
consistsRepeatedSubstring('ababab'); // true
consistsRepeatedSubstring('abc'); // false
```
