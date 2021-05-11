---
title: Get all siblings of an element
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const siblings = ele => [].slice.call(ele.parentNode.children).filter((child) => (child !== ele));
```