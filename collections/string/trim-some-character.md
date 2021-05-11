---
title: Trim some character
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const trim = (str, char) => str.split(char).filter(Boolean).join();

// Examples
trim('/hello world//', '/');        // hello world
trim('"hello world"', '"');         // hello world
trim('   hello world ', ' ');       // hello world
```