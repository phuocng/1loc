---
title: Initialize the current date but set time to midnight
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0));
```