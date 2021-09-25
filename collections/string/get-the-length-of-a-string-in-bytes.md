---
title: Get the length of a string in bytes
category: String
---

```js
const bytes = (str) => new Blob([str]).size;

// Examples
bytes('hello world'); // 11
bytes('🎉'); // 4
```
