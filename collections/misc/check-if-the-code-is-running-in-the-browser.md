---
title: Check if the code is running in the browser
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const isBrowser = typeof window === 'object' && typeof document === 'object';
```