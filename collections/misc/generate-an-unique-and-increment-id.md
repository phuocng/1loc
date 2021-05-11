---
title: Generate an unique and increment id
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const uid = (() => (id = 0, () => id++))();

// Examples
uid();          // 0
uid();          // 1
uid();          // 2
uid();          // 3
```