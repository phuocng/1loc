---
title: Check if an array is not empty
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const isNotEmpty = arr => Array.isArray(arr) && Object.keys(arr).length > 0;

// Examples
isNotEmpty([]);             // false
isNotEmpty([1, 2, 3]);      // true
```