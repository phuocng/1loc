---
title: Get the first date in the month of a date
category: Date Time
---

**JavaScript version**

```js
const getFirstDate = (d = new Date()) => new Date(d.getFullYear(), d.getMonth(), 1);
```

**TypeScript version**

```js
const getFirstDate = (d = new Date()): Date => new Date(d.getFullYear(), d.getMonth(), 1);
```
