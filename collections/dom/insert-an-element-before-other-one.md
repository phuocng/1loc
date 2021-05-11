---
title: Insert an element before other one
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);

// Or
const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele);
```