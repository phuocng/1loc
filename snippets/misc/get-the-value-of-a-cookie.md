---
title: Get the value of a cookie
category: Misc
---

**JavaScript version**

```js
const cookie = (name) => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
```

**Examples**

```js
cookie('_ga'); // GA1.2.825309271.1581874719
```
