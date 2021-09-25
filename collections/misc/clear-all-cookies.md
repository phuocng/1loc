---
title: Clear all cookies
category: Misc
---

```js
const clearCookies = () =>
    document.cookie
        .split(';')
        .forEach(
            (c) =>
                (document.cookie = c.replace(/^ +/, '').replace(/=.*/, `=;expires=${new Date().toUTCString()};path=/`))
        );

// Example
clearCookies();
```
