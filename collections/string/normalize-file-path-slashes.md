---
title: Normalize file path slashes
category: String
tags:
  - posts
layout: layouts/post.njk
---

```js
const normalizePath = path => path.replace(/[\\/]+/g, '/');

// Example
normalizePath('\\foo\\bar\\baz\\');         // /foo/bar/baz/
normalizePath('.//foo//bar///////baz/');    // ./foo/bar/baz/
```