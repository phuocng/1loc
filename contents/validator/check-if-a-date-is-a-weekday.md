---
layout: layouts/post.njk
title: Check if a date is a weekday
category: Validator
---

**JavaScript version**

```js
// `date` is a Date object
const isWeekday = (date = new Date()) => date.getDay() % 6 !== 0;
```

**TypeScript version**

```js
const isWeekday = (date = new Date()): boolean => date.getDay() % 6 !== 0;
```
