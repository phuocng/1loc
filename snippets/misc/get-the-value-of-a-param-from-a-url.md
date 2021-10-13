---
title: Get the value of a param from a URL
category: Misc
---

**JavaScript version**

```js
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param);
```

**TypeScript version**

```js
const getParam = (url: string, param: string): string | null => new URLSearchParams(new URL(url).search).get(param);
```

**Examples**

```js
getParam('http://domain.com?message=hello', 'message'); // 'hello'
```
