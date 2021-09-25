---
title: Get the weekday of a date
category: Date Time
---

```js
// `date` is a Date object
const getWeekday = (date) =>
    ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][date.getDay()];
```
