---
title: Generate a random hex color
category: Random
tags:
  - posts
layout: layouts/post.njk
---

```js
const randomColor = () => `#${Math.random().toString(16).slice(2, 8).padEnd(6, '0')}`;

// Or
const randomColor = () => `#${(~~(Math.random()*(1<<24))).toString(16)}`;
```