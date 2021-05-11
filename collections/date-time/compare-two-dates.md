---
title: Compare two dates
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
// `a` and `b` are `Date` instances
const compare = (a, b) => a.getTime() > b.getTime();

// Example
compare(new Date('2020-03-30'), new Date('2020-01-01'));    // true
```