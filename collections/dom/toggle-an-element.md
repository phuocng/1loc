~~~ javascript
const toggle = ele => (ele.style.display = (ele.style.display === 'none') ? 'block' : 'none');

// Or
const toggle = ele => ele.hidden = !ele.hidden;
~~~