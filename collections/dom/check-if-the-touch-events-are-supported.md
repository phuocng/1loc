---
title: Check if the touch events are supported
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const touchSupported = () => ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
```