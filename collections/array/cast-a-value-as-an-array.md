---
title: Cast a value as an array
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const castArray = value => Array.isArray(value) ? value : [value];

// Examples
castArray(1);               // [1]
castArray([1, 2, 3]);       // [1, 2, 3]
```