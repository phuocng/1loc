---
title: Clear all cookies
category: Misc
---

**JavaScript version**

```js
const clearCookies = () => document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));
```

**TypeScript version**

```js
const clearCookies = (): void => document.cookie.split(';').forEach((c) => (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`)));
```

**Examples**

```js
clearCookies();
```
