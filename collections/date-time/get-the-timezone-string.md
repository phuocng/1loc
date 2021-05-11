---
title: Get the timezone string
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

// Example
getTimezone();      // 'Asia/Saigon'
```