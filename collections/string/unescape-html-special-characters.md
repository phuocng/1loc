~~~ javascript
const unescape = str => str.replace(/&amp;/g , '&').replace(/&lt;/g  , '<').replace(/&gt;/g  , '>').replace(/&#0*39;/g , "'").replace(/&quot;/g, '"');
~~~