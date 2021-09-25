---
title: Sort an array of dates
category: Date Time
---

```js
// `arr` is an array of `Date` items
const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime());
const sortAscending = (arr) => arr.sort((a, b) => a.getTime() < b.getTime());
```
