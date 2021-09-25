---
title: Make the first character of a string lowercase
category: String
---

```js
const lowercaseFirst = (str) => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Example
lowercaseFirst('Hello World'); // 'hello World'
```
