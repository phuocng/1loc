---
title: Clear all cookies
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const clearCookies = document.cookie.split(';').forEach(c => document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`));
```