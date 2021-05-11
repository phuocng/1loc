---
title: Detect macOS browser
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const isMacBrowser = /Mac|iPod|iPhone|iPad/.test(navigator.platform);
```