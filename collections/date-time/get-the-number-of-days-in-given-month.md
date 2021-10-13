---
title: Get the number of days in given month
category: Date Time
---

**JavaScript version**

```js
// `month` is zero-based index
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
```

**TypeScript version**

```js
const daysInMonth = (month: number, year: number): number => new Date(year, month, 0).getDate();
```
