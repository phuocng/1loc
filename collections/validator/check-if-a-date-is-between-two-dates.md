---
title: Check if a date is between two dates
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
// `min`, `max` and `date` are `Date` instances
const isBetween = (date, min, max) => (date.getTime() >= min.getTime() && date.getTime() <= max.getTime());
```