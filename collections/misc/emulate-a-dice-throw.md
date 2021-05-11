---
title: Emulate a dice throw
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const throwdice = () => ~~(Math.random() * 6) + 1;

// Examples
throwdice();    // 4 
throwdice();    // 1 
throwdice();    // 6 
```