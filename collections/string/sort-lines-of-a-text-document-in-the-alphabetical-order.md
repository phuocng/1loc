---
title: Sort lines of a text document in the alphabetical order
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const sortLines = str => str.split(/\r?\n/).sort().join('\n');

// Reverse the order
const reverseSortedLines = str => str.split(/\r?\n/).sort().reverse().join('\n');

// Example
sortLines(`
Thaddeus Mullen
Kareem Marshall
Ferdinand Valentine
Hasad Lindsay
Mufutau Berg
Knox Tyson
Kasimir Fletcher
Colton Sharp
Adrian Rosales
Theodore Rogers
`);

/* Output */
/*
Adrian Rosales
Colton Sharp
Ferdinand Valentine
Hasad Lindsay
Kareem Marshall
Kasimir Fletcher
Knox Tyson
Mufutau Berg
Thaddeus Mullen
Theodore Rogers
*/
```