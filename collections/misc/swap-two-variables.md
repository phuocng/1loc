---
title: Swap two variables
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
[a, b] = [b, a];

// Or
a = [b, b = a][0];

// Or
a = (x => x)(b, b = a);

// Or
// (only works with numbers)
a = b + (b = a, 0);

a = b * (b = a, 1);
```