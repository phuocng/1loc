---
title: Generate a random integer in given range
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
```