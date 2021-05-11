---
title: Get the current quarter of a date
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3);
```