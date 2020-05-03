~~~ javascript
// `encodeURIComponent` doesn't encode -_.!~*'()
const encode = url => encodeURIComponent(url).replace(/!/g, '%21').replace(/~/g, '%7E').replace(/\*/g, '%2A').replace(/'/g, '%27').replace(/\(/g, '%28').replace(/\)/g, '%29').replace(/%20/g, '+');
~~~