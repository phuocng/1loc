---
title: Get the weekday of a date
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a Date object
const getWeekday = date => ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
```