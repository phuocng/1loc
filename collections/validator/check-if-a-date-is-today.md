---
title: Check if a date is today
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a Date object
const isToday = (date) => date.toISOString().slice(0, 10) === new Date().toISOString().slice(0, 10);
```