---
title: Get the yesterday date
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
const yesterday = (d => new Date(d.setDate(d.getDate() - 1)))(new Date);

// Or
const yesterday = new Date((new Date()).valueOf() - 1000 * 60 * 60 * 24);
```