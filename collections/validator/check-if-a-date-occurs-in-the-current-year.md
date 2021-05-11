---
title: Check if a date occurs in the current year
category: Validator
tags:
  - posts
layout: layouts/post.njk
---

```js
// `date` is a Date object
const isCurrentYear = (date) => date.getUTCFullYear() === new Date().getUTCFullYear();
```