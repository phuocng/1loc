---
title: Add AM PM suffix to an hour
category: Date Time
tags:
  - posts
layout: layouts/post.njk
---

```js
// `h` is an hour number between 0 and 23
const suffixAmPm = h => `${h % 12 === 0 ? 12 : h % 12}${h < 12 ? 'am' : 'pm'}`;

// Examples
suffixAmPm(0);      // '12am'
suffixAmPm(5);      // '5am'
suffixAmPm(12);     // '12pm'
suffixAmPm(15);     // '3pm'
suffixAmPm(23);     // '11pm'
```