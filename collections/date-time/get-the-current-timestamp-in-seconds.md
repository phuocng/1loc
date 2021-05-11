---
title: Get the current timestamp in seconds
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
const ts = () => Math.floor(new Date().getTime() / 1000);
```