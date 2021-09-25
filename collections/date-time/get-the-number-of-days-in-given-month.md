---
title: Get the number of days in given month
category: Date Time
---

```js
// `month` is zero-based index
const daysInMonth = (month, year) => new Date(year, month, 0).getDate();
```
