---
title: Get the current quarter of a date
category: Date Time
---

```js
const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3);
```
