---
title: Toggle an element
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const toggle = ele => (ele.style.display = (ele.style.display === 'none') ? 'block' : 'none');

// Or
const toggle = ele => ele.hidden = !ele.hidden;
```