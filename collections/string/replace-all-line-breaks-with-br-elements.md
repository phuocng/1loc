~~~ javascript
const nl2br = str => str.replace(new RegExp('\r?\n', 'g'), '<br>');
~~~