---
title: Get the position of an element relative to the document
category: DOM
---

```js
const getPosition = (ele) => (
    (r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY }
);

// Example
getPosition(document.body); // { left: 0, top: 0 }
```
