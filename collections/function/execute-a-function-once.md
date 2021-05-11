---
title: Execute a function once
category: Function
tags:
  - posts
layout: layouts/post.njk
---

```js
const once = fn => ((ran = false) => () => ran ? fn : (ran = !ran, fn = fn()))();

// Example
let n = 0;
const incOnce = once(() => ++n);
incOnce();      // n = 1
incOnce();      // n = 1
incOnce();      // n = 1
```