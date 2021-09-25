---
title: Check if a path is relative
category: String
---

```js
const isRelative = (path) => !/^([a-z]+:)?[\\/]/i.test(path);

// Examples
isRelative('/foo/bar/baz'); // false
isRelative('C:\\foo\\bar\\baz'); // false
isRelative('foo/bar/baz.txt'); // true
isRelative('foo.md'); // true
```
