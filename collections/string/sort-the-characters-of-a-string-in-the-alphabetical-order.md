---
title: Sort the characters of a string in the alphabetical order
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const sort = str => str.split('').sort((a, b) => a.localeCompare(b)).join('');

// Example
sort('hello world');    // dehllloorw
```