~~~ javascript
const serialize = formEle => Array.from(new FormData(formEle)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v}), {});
~~~