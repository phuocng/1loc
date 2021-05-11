---
title: Convert snake_case to camelCase
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const snakeToCamel = str => str.toLowerCase().replace(/(_\w)/g, m => m.toUpperCase().substr(1));

// Example
snakeToCamel('HELLO_world');    // 'helloWorld'
```