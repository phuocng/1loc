---
title: Check if a string consists of a repeated character sequence
category: String
---

```js
const consistsRepeatedSubstring = (str) => `${str}${str}`.indexOf(str, 1) !== str.length;

// Example
consistsRepeatedSubstring('aa'); // true
consistsRepeatedSubstring('aaa'); // true
consistsRepeatedSubstring('ababab'); // true
consistsRepeatedSubstring('abc'); // false
```
