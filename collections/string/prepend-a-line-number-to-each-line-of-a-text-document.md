---
title: Prepend a line number to each line of a text document
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const prependNumbers = str => str.split(/\r?\n/).map((line, i) => `${(i + 1).toString().padStart(2, ' ')} ${line}`).join('\n');

// Example
prependNumbers(`one
two
three
four`);

/* Output */
/*
1 one
2 two
3 three
4 four
*/
```