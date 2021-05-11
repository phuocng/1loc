---
title: Insert given HTML before an element
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const insertHtmlBefore = (html, ele) => ele.insertAdjacentHTML('beforebegin', html);
```