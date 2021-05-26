---
title: Count the number of words in a string
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const countWords = str => str.trim().split(/\s+/).length;

// Example
countWords('Hello World');        // 2
countWords('Hello    World');     // 2
countWords('  Hello  World  ');   // 2
```