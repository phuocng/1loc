---
layout: layouts/post.njk
title: Shallow copy an object
category: Object
---

**JavaScript version**

```js
const shallowCopy = obj => Object.assign({}, obj);

// or
const shallowCopy = obj => {...obj};
```
