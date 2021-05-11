---
title: Extract year, month, day, hour, minute, second and millisecond from a date
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a `Date` object
const extract = date => date.toISOString().split(/[^0-9]/).slice(0, -1);

// `extract` is an array of [year, month, day, hour, minute, second, millisecond]
```