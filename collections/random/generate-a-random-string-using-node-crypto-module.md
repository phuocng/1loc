---
title: Generate a random string using Node crypto module
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const randomStr = () => require('crypto').randomBytes(32).toString('hex');
```
