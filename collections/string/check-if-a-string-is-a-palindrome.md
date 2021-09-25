---
title: Check if a string is a palindrome
category: String
---

```js
const isPalindrome = (str) => str === str.split('').reverse().join('');

// Examples
isPalindrome('abc'); // false
isPalindrom('abcba'); // true
```
