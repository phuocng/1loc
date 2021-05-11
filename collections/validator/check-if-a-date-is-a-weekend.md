---
title: Check if a date is a weekend
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a Date object
const isWeekend = (date = new Date()) => date.getDay() % 6 === 0;
```