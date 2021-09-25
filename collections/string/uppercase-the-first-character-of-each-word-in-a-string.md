---
title: Uppercase the first character of each word in a string
category: String
---

```js
const uppercaseWords = (str) =>
    str
        .split(' ')
        .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
        .join(' ');

// Or
const uppercaseWords = (str) => str.replace(/^(.)|\s+(.)/g, (c) => c.toUpperCase());

// Example
uppercaseWords('hello world'); // 'Hello World'
```
