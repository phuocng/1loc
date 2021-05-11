---
title: Split an array into chunks
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const chunk = (arr, size) => arr.reduce((acc, e, i) => (i % size ? acc[acc.length - 1].push(e) : acc.push([e]), acc), []);

// Examples
chunk([1, 2, 3, 4, 5, 6, 7, 8], 3);     // [[1, 2, 3], [4, 5, 6], [7, 8]]
chunk([1, 2, 3, 4, 5, 6, 7, 8], 4);     // [[1, 2, 3, 4], [5, 6, 7, 8]]
```