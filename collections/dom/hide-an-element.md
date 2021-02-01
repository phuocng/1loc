~~~ javascript
// Pick the method that is suitable for your use case
const hide = ele => ele.style.display = 'none';

// Or
const hide = ele => ele.style.visibility = 'hidden';

// Or
const hide = ele => ele.hidden = true;
~~~