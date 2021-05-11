---
title: Remove falsy values from array
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const removeFalsy = arr => arr.filter(Boolean);

// Example
removeFalsy([0, 'a string', '', NaN, true, 5, undefined, 'another string', false]); // ['a string', true, 5, 'another string']
```