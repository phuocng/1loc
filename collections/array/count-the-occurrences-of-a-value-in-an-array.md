---
title: Count the occurrences of a value in an array
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);

// Or
const countOccurrences = (arr, val) => arr.filter(item => item === val).length;

// Examples
countOccurrences([2, 1, 3, 3, 2, 3], 2);                // 2
countOccurrences(['a', 'b', 'a', 'c', 'a', 'b'], 'a');  // 3
```