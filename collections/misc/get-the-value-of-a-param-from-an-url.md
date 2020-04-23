~~~ javascript
const getParam = (url, param) => new URLSearchParams(new URL(url).search).get(param);

// getParam('http://domain.com?message=hello', 'message') === 'hello'
~~~