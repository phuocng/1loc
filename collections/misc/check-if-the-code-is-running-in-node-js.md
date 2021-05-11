---
title: Check if the code is running in NodeJS
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const isNode = typeof process !== 'undefined' && process.versions != null && process.versions.node != null;
```