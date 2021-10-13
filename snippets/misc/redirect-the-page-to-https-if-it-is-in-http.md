---
title: Redirect the page to HTTPS if it is in HTTP
category: Misc
---

**JavaScript version**

```js
const redirectHttps = () => (location.protocol === 'https:' ? {} : location.replace(`https://${location.href.split('//')[1]}`));

// Or
const redirectHttps = () => (location.protocol === 'https:' ? {} : (location.protocol = 'https:'));
```

**TypeScript version**

```js
const redirectHttps = (): void => (location.protocol === 'https:' ? void 0 : location.replace(`https://${location.href.split('//')[1]}`));

// Or
const redirectHttps = (): string => (location.protocol === 'https:' ? '' : (location.protocol = 'https:'));
```
