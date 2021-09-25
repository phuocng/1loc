---
title: Initialize the current date but set time to midnight
category: Date Time
---

```js
const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0));
```
