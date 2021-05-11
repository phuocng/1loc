---
title: Generate a random string with given length
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const generateString = length => Array(length).fill('').map((v) => Math.random().toString(36).charAt(2)).join('');
```