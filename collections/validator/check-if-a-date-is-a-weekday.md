---
title: Check if a date is a weekday
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a Date object
const isWeekday = (date = new Date()) => date.getDay() % 6 !== 0;
```