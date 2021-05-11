---
title: Create an empty function
category: Function
tags:
  - posts
layout: layouts/post.njk
---

```js
const noop = () => {};

// Or
const noop = Function();
// calling Function() might be detected as using eval by some security tools
```
