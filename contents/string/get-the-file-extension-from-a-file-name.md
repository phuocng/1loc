---
layout: layouts/post.njk
title: Get the file extension from a file name
category: String
---

**JavaScript version**

```js
const ext = (fileName) => fileName.split('.').pop();
```

**TypeScript version**

```js
const ext = (fileName: string): string => fileName.split('.').pop();
```
