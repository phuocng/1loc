---
title: Check if user scrolls to the bottom of the page
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const isAtBottom = () => document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```