---
title: Get the position of an element relative to the document
category: DOM
---

**JavaScript version**

```js
const getPosition = (ele) => ((r = ele.getBoundingClientRect()), { left: r.left + window.scrollX, top: r.top + window.scrollY });
```

**Example**

```js
getPosition(document.body); // { left: 0, top: 0 }
```
