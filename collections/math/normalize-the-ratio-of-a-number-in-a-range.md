---
title: Normalize the ratio of a number in a range
category: Math
tags:
  - posts
layout: layouts/post.njk
---

```js
const normalizeRatio = (value, min, max) => (value - min) / (max - min);
```