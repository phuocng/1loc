---
title: Replace an element
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const replace = (ele, newEle) => ele.parentNode.replaceChild(newEle, ele);
```