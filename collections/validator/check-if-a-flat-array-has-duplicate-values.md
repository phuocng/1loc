---
title: Check if a flat array has duplicate values
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
const hasDuplicateValues = arr => new Set(arr).size !== arr.length;

// Examples
hasDuplicateValues(['h', 'e', 'l', 'l', 'o']);      // true
hasDuplicateValues(['w', 'o', 'r', 'd']);           // false
```