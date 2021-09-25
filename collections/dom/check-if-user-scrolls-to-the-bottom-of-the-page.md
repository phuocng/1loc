---
title: Check if user scrolls to the bottom of the page
category: DOM
---

```js
const isAtBottom = () =>
    document.documentElement.clientHeight + window.scrollY >= document.documentElement.scrollHeight;
```
