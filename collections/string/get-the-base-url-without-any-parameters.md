---
title: Get the base URL without any parameters
category: String
---

**JavaScript version**

```js
const baseUrl = (url) => (url.indexOf('?') === -1 ? url : url.slice(0, url.indexOf('?')));

// Or
// Note that `includes` isn't supported in IE 11
const baseUrl = (url) => (url.includes('?') ? url.slice(0, url.indexOf('?')) : url);

// Or
const baseUrl = (url) => url.split('?')[0];
```

**TypeScript version**

```js
const baseUrl = (url: string): string => (url.indexOf('?') === -1 ? url : url.slice(0, url.indexOf('?')));

// Or
// Note that `includes` isn't supported in IE 11
const baseUrl = (url: string): string => (url.includes('?') ? url.slice(0, url.indexOf('?')) : url);

// Or
const baseUrl = (url: string): string => url.split('?')[0];
```

**Examples**

```js
baseUrl('https://domain.com/path/sub/path?foo=bar&hello=world'); // 'https://domain.com/path/sub/path'
```
