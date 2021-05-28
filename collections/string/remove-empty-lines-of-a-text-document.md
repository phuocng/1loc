---
title: Remove empty lines of a text document
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const removeEmptyLines = str => str.split(/\r?\n/).filter(line => line.trim() !== '').join('\n');

// Example
removeEmptyLines(`
red

green
blue

yellow
`);

/* Output */
/*
red
green
blue
yellow
*/
```