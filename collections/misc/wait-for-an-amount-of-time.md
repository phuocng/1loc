---
title: Wait for an amount of time
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const wait = async (milliseconds) => new Promise((resolve) => setTimeout(resolve, milliseconds));
```