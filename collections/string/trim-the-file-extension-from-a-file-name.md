~~~ javascript
const trimExt = fileName => fileName.indexOf('.') === -1 ? fileName : fileName.split('.').slice(0, -1).join('.');

// Examples
trimExt('document');            // document
trimExt('document.pdf');        // document
trimExt('document.2020.pdf');   // document.2020
~~~