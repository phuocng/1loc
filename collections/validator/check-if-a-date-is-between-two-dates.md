---
title: Check if a date is between two dates
category: Validator
---

```js
// `min`, `max` and `date` are `Date` instances
const isBetween = (date, min, max) => date.getTime() >= min.getTime() && date.getTime() <= max.getTime();
```
