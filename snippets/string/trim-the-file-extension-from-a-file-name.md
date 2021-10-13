---
title: Trim the file extension from a file name
category: String
---

**JavaScript version**

```js
const trimExt = (fileName) => (fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.'));
```

**TypeScript version**

```js
const trimExt = (fileName: string): string => (fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.'));
```

**Examples**

```js
trimExt('document'); // document
trimExt('document.pdf'); // document
trimExt('document.2020.pdf'); // document.2020
```
