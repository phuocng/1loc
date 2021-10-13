---
title: Get the value at given path of an object
category: Object
---

**JavaScript version**

```js
const getValue = (path, obj) => path.split('.').reduce((acc, c) => acc && acc[c], obj);
```

**Examples**

```js
getValue('a.b', { a: { b: 'Hello World' } }); // 'Hello World';
```
