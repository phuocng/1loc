---
title: Count the number of words in a string
category: String
---

```js
const countWords = (str) => str.trim().split(/\s+/).length;

// Example
countWords('Hello World'); // 2
countWords('Hello    World'); // 2
countWords('  Hello  World  '); // 2
```
