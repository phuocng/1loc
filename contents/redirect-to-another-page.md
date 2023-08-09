---
layout: layouts/post.njk
title: Redirect to another page
category: DOM
---

**JavaScript version**

```js
const goTo = (url) => (location.href = url);
```

**TypeScript version**

```js
const goTo = (url: string): string => (location.href = url);
```
