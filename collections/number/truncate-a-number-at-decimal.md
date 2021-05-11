---
title: Truncate a number at decimal
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const truncate = n => ~~n;

// Examples
truncate(25.198726354);         // 25
truncate(-25.198726354);        // -25
```