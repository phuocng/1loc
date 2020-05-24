~~~ javascript
const fileName = url => url.substring(url.lastIndexOf('/') + 1);

// Example
fileName('http://domain.com/path/to/document.pdf');     // 'document.pdf'
~~~