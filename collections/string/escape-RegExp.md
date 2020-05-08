```js
const escapeRegExp = string => string.replace(/[.*+\-?^${}()|[\]\\]/g, '\\$&') // $& means the whole matched string
```
