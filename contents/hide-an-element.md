---
layout: layouts/post.njk
title: Hide an element
category: DOM
---

**JavaScript version**

```js
// Pick the method that is suitable for your use case
const hide = (ele) => (ele.style.display = 'none');

// Or
const hide = (ele) => (ele.style.visibility = 'hidden');

// Or
const hide = (ele) => (ele.hidden = true);
```

**TypeScript version**

```js
const hide = (ele: HTMLElement): string => (ele.style.display = 'none');

// Or
const hide = (ele: HTMLElement): string => (ele.style.visibility = 'hidden');

// Or
const hide = (ele: HTMLElement): boolean => (ele.hidden = true);
```
