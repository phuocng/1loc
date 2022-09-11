---
layout: layouts/post.njk
title: Reload the current page
category: DOM
---

**JavaScript version**

```js
const reload = () => location.reload();

// Or
const reload = () => (location.href = location.href);
```

**TypeScript version**

```js
const reload = (): void => location.reload();

// Or
const reload = (): string => (location.href = location.href);
```
