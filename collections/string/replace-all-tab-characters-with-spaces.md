---
title: Replace all tab characters with spaces
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const replace = (str, numSpaces = 4) => str.replaceAll('\t', ' '.repeat(numSpaces));
```