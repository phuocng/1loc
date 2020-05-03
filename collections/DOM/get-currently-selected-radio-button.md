~~~ javascript
const selectedRadioBtnForForm = (formName) => Array.from(document.getElementsByName(formName)).find(input => input.checked);
~~~
