---
title: Get the day of the year from a date
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a Date object
const dayOfYear = date => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / (1000 * 60 * 60 * 24));

// Example
dayOfYear(new Date(2020, 04, 16));      // 137
```