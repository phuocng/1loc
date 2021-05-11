---
title: Detect dark mode
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const isDarkMode = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
```