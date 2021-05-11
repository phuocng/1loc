---
title: Shallow copy an object
category: Object
tags:
  - posts
layout: layouts/post.njk
---

```js
const shallowCopy = obj => Object.assign({}, obj);

// or
const shallowCopy = obj => {...obj};
```