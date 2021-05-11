---
title: Get the first date in the month of a date
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);
```