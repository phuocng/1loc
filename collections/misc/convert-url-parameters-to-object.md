~~~ javascript
const getUrlParams = query => Array.from(new URLSearchParams(query)).reduce((p, [k, v]) => Object.assign({}, p, { [k]: p[k] ? (Array.isArray(p[k]) ? p[k] : [p[k]]).concat(v) : v}), {});

// Examples
getUrlParams(location.search);              // Get the parameters of the current URL

getUrlParams('foo=Foo&bar=Bar');            // { foo: "Foo", bar: "Bar" }

// Duplicate key
getUrlParams('foo=Foo&foo=Fuzz&bar=Bar');   // { foo: ["Foo", "Fuzz"], bar: "Bar" }
~~~