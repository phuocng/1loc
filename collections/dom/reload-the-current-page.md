---
title: Reload the current page
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const reload = () => location.reload();

// Or
const reload = () => (location.href = location.href);
```