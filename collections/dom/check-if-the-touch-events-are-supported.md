---
title: Check if the touch events are supported
category: DOM
---

```js
const touchSupported = () =>
    'ontouchstart' in window || (window.DocumentTouch && document instanceof window.DocumentTouch);
```
