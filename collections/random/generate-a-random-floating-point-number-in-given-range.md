---
title: Generate a random floating point number in given range
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const randomFloat = (min, max) => Math.random() * (max - min) + min;
```