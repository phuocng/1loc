---
title: Redirect the page to HTTPS if it is in HTTP
category: Misc
---

```js
const redirectHttps = () =>
    location.protocol === 'https:' ? {} : location.replace(`https://${location.href.split('//')[1]}`);

// Or
const redirectHttps = () => (location.protocol === 'https:' ? {} : (location.protocol = 'https:'));
```
