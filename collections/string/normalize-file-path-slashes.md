~~~ javascript
const normalizePath = path => path.replace(/[\\/]+/g, '/');

// Example
normalizePath('\\foo\\bar\\baz\\');         // /foo/bar/baz/
normalizePath('.//foo//bar///////baz/');    // ./foo/bar/baz/
~~~