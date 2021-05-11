---
title: Convert a date to YYYY-MM-DD format
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a `Date` object
const formatYmd = date => date.toISOString().slice(0, 10);

// Example
formatYmd(new Date());      // 2020-05-06
```
