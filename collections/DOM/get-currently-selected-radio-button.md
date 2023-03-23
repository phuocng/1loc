~~~ javascript
//returns undefined if none are selected
const selectedRadioBtnForForm = (formName) => Array.from(document.getElementsByName(formName)).find(input => input.type === "radio" && input.checked);
~~~
