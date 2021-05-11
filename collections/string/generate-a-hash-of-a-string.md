---
title: Generate a hash of a string
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const hash = str => str.split('').reduce((prev, curr) => Math.imul(31, prev) + curr.charCodeAt(0) | 0, 0);

// Or
const hash = str => str.split('').reduce((prev, curr) => (((prev << 5) - prev) + curr.charCodeAt(0)) | 0, 0);

// Example
hash('hello');      // 99162322
```