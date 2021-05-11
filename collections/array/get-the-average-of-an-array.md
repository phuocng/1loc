---
title: Get the average of an array
category: Array
tags:
  - posts
layout: layouts/post.njk
---

```js
const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
```