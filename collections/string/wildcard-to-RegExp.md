```js
const toRegExp = string => new RegExp(string.replace(/\\\*/g, '\\S*').replace(/\\\?/g, '.'))
```
