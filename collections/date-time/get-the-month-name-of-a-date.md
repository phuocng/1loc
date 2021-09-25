---
title: Get the month name of a date
category: Date Time
---

```js
// `date` is a Date object
const getMonthName = (date) =>
    [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        ' November',
        'December',
    ][date.getMonth()];
```
