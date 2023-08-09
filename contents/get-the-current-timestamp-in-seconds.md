---
layout: layouts/post.njk
title: Get the current timestamp in seconds
category: Date Time
---

**JavaScript version**

```js
const ts = () => Math.floor(new Date().getTime() / 1000);
```

**TypeScript version**

```js
const ts = (): number => Math.floor(new Date().getTime() / 1000);
```
