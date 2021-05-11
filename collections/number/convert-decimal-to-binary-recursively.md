---
title: Convert decimal to binary recursively
category: Number
tags:
  - posts
layout: layouts/post.njk
---

```js
const decToBi = num => num === 0 ? 0 : num % 2 + 10 * decToBi(~~(num / 2));


// Example
decToBi(10);      //1010
```
