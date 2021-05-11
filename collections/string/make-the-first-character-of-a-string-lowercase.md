---
title: Make the first character of a string lowercase
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const lowercaseFirst = str => `${str.charAt(0).toLowerCase()}${str.slice(1)}`;

// Example
lowercaseFirst('Hello World');      // 'hello World'
```