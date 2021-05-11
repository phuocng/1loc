---
title: Convert a string to camelCase
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const toCamelCase = str => str.trim().replace(/[-_\s]+(.)?/g, (_, c) => c ? c.toUpperCase() : '');

// Examples
toCamelCase('background-color');            // backgroundColor
toCamelCase('-webkit-scrollbar-thumb');     // WebkitScrollbarThumb
toCamelCase('_hello_world');                // HelloWorld
toCamelCase('hello_world');                 // helloWorld
```