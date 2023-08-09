---
layout: layouts/post.njk
title: Check if a URL is absolute
category: String
---

**JavaScript version**

```js
const isAbsoluteUrl = (url) => /^[a-z][a-z0-9+.-]*:/.test(url);
```

**TypeScript version**

```js
const isAbsoluteUrl = (url: string): boolean => /^[a-z][a-z0-9+.-]*:/.test(url);
```

**Examples**

```js
isAbsoluteUrl('https://1loc.dev'); // true
isAbsoluteUrl('https://1loc.dev/foo/bar'); // true
isAbsoluteUrl('1loc.dev'); // false
isAbsoluteUrl('//1loc.dev'); // false
```
