---
title: Create an empty map that does not have properties
category: Object
tags:
  - posts
layout: layouts/post.njk
---

```js
// `map` doesn't have any properties
const map = Object.create(null);

// The following `map` has `__proto__` property
// const map = {};
```