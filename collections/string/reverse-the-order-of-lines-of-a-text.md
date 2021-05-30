---
title: Reverse the order of lines of a text
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const reverseLines = str => str.split(/\r\n?/).reverse().join('\n');

// Example
reverseLines(`one
two
three`);

/* Output */
/*
three
two
one
*/
```