---
title: Get the yesterday date
category: Date Time
---

**JavaScript version**

```js
const yesterday = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());

// Or
const yesterday = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
```

**TypeScript version**

```js
const yesterday: Date = ((d) => new Date(d.setDate(d.getDate() - 1)))(new Date());

// Or
const yesterday: Date = new Date(new Date().valueOf() - 1000 * 60 * 60 * 24);
```
