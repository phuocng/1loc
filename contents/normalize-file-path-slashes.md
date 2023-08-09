---
layout: layouts/post.njk
title: Normalize file path slashes
category: String
---

**JavaScript version**

```js
const normalizePath = (path) => path.replace(/[\\/]+/g, '/');
```

**TypeScript version**

```js
const normalizePath = (path: string): string => path.replace(/[\\/]+/g, '/');
```

**Examples**

```js
normalizePath('\\foo\\bar\\baz\\'); // /foo/bar/baz/
normalizePath('.//foo//bar///////baz/'); // ./foo/bar/baz/
```
