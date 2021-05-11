---
title: Hide an element
category: DOM
tags:
  - posts
layout: layouts/post.njk
---

```js
// Pick the method that is suitable for your use case
const hide = ele => ele.style.display = 'none';

// Or
const hide = ele => ele.style.visibility = 'hidden';

// Or
const hide = ele => ele.hidden = true;
```