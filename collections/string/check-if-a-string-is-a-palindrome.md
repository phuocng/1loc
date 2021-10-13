---
title: Check if a string is a palindrome
category: String
---

**JavaScript version**

```js
const isPalindrome = (str) => str === str.split('').reverse().join('');
```

**TypeScript version**

```js
const isPalindrome = (str: string): boolean => str === str.split('').reverse().join('');
```

**Examples**

```js
isPalindrome('abc'); // false
isPalindrom('abcba'); // true
```
