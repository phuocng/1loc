~~~ javascript
const isPlainObject = v => (!!v && typeof v === 'object' && (v.__proto__ === null || v.__proto__ === Object.prototype));

// Examples
isPlainObject(null);                    // false
isPlainObject('hello world');           // false
isPlainObject([]);                      // false
isPlainObject(Object.create(null));     // false
isPlainObject(function() {});           // false

isPlainObject({});                      // true
isPlainObject({ a: '1', b: '2' });      // true
~~~