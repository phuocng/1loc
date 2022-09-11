---
layout: layouts/post.njk
title: Create an empty function
category: Function
---

**JavaScript version**

```js
const noop = () => {};

// Or
const noop = Function();
// calling Function() might be detected as using eval by some security tools
```
