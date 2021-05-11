---
title: Swap case of characters in a string
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const swapCase = str => str.split('').map(c => (c === c.toLowerCase() ? c.toUpperCase() : c.toLowerCase())).join('');

// Example
swapCase('Hello World');      // 'hELLO wORLD'
```