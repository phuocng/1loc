---
title: Strip HTML from a given text
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
```