---
title: Generate a random sign
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const randomSign = () => Math.random() >= 0.5 ? 1 : -1;
```