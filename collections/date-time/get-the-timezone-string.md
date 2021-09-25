---
title: Get the timezone string
category: Date Time
---

```js
const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

// Example
getTimezone(); // 'Asia/Saigon'
```
