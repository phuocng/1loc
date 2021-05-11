---
title: Repeat a string
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const repeat = (str, numberOfTimes) => str.repeat(numberOfTimes);

// Or
const repeat = (str, numberOfTimes) => Array(numberOfTimes + 1).join(str);
```
