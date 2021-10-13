---
title: Get the current quarter of a date
category: Date Time
---

**JavaScript version**

```js
const getQuarter = (d = new Date()) => Math.ceil((d.getMonth() + 1) / 3);
```

**TypeScript version**

```js
const getQuarter = (d = new Date()): number => Math.ceil((d.getMonth() + 1) / 3);
```
