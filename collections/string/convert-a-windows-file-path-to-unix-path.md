---
title: Convert a Windows file path to Unix path
category: String
---

```js
const toUnixPath = (path) => path.replace(/[\\/]+/g, '/').replace(/^([a-zA-Z]+:|\.\/)/, '');

// Examples
toUnixPath('./foo/bar/baz'); // foo/bar/baz
toUnixPath('C:\\foo\\bar\\baz'); // /foo/bar/baz
```
