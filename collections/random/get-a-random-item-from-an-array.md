---
title: Get a random item from an array
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const randomItem = arr => arr[(Math.random() * arr.length) | 0];
```
