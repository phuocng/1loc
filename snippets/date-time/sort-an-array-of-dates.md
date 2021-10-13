---
title: Sort an array of dates
category: Date Time
---

**JavaScript version**

```js
// `arr` is an array of `Date` items
const sortDescending = (arr) => arr.sort((a, b) => a.getTime() > b.getTime());

const sortAscending = (arr) => arr.sort((a, b) => a.getTime() < b.getTime());
```

**TypeScript version**

```js
const sortDescending = (arr: Date[]): Date[] => arr.sort((a, b) => a.getTime() - b.getTime());

const sortAscending = (arr: Date[]): Date[] => arr.sort((a, b) => b.getTime() - a.getTime());
```
