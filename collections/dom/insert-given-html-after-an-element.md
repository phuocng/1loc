---
title: Insert given HTML after an element
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const insertHtmlAfter = (html, ele) => ele.insertAdjacentHTML('afterend', html);
```