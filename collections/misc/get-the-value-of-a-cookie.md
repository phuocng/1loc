---
title: Get the value of a cookie
category: Misc
tags:
  - posts
layout: layouts/post.njk
---

```js
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();

// Example
cookie('_ga');      // GA1.2.825309271.1581874719
```