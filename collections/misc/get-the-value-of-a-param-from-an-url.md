~~~ javascript
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param);

// Example
getParam('http://domain.com?message=hello', 'message');     // 'hello'
~~~