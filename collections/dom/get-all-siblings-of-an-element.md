---
title: Get all siblings of an element
category: DOM
---

```js
const siblings = (ele) => [].slice.call(ele.parentNode.children).filter((child) => child !== ele);
```
