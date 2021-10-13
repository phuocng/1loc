---
title: Get the last date in the month of a date
category: Date Time
---

**JavaScript version**

```js
const getLastDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth() + 1, 0);
```

**TypeScript version**

```js
const getLastDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth() + 1, 0);
```
