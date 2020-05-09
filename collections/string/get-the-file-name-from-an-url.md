~~~ javascript
const fileName = url => url.substring(url.lastIndexOf('/') + 1);

// fileName('http://domain.com/path/to/document.pdf') === 'document.pdf'
~~~