---
title: Check if an element is a descendant of another
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const isDescendant = (child, parent) => parent.contains(child);
```