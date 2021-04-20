~~~ javascript
const removeNullUndefined = obj => Object.entries(obj).reduce((a, [k, v]) => (v == null ? a : (a[k] = v, a)), {});

// Or
const removeNullUndefined = obj => Object.entries(obj).filter(([_, v]) => v != null).reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

// Or
const removeNullUndefined = obj => Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null));

// Example
removeNullUndefined({
    foo: null,
    bar: undefined,
    fuzz: 42,
});                         // { fuzz: 42 }
~~~