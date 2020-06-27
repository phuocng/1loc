~~~ javascript
// turns the cookies into an object

const cookies = document.cookie.split(';').map(item => item.split('=')).reduce((acc, [key, value]) => (acc[key.trim().replace('"', '')] = value) && acc, {});

~~~