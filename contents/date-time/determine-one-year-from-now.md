---
layout: layouts/post.njk
title: Determine one year from now
category: Date Time
---

**JavaScript version**

```js
const plusOneYear = ((d) => new Date(d.setFullYear(d.getFullYear() + 1)))(new Date());
```

**TypeScript version**

```js
const plusOneYear: Date = ((d) => new Date(d.setFullYear(d.getFullYear() + 1)))(new Date());
```

**See also**

-   [Get the tomorrow date](/date-time/get-the-tomorrow-date)
-   [Get the yesterday date](/date-time/get-the-yesterday-date)
