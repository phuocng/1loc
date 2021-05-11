---
title: Calculate the number of months between two dates
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
const monthDiff = (startDate, endDate) => Math.max(0, (endDate.getFullYear() - startDate.getFullYear()) * 12 - startDate.getMonth() + endDate.getMonth());

// Example
monthDiff(new Date('2020-01-01'), new Date('2021-01-01'));  // 12
```
