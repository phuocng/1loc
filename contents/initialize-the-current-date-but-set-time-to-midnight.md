---
layout: layouts/post.njk
title: Initialize the current date but set time to midnight
category: Date Time
---

**JavaScript version**

```js
const midnightOfToday = () => new Date(new Date().setHours(0, 0, 0, 0));
```

**TypeScript version**

```js
const midnightOfToday = (): Date => new Date(new Date().setHours(0, 0, 0, 0));
```
