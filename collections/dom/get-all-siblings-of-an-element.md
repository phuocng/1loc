~~~ javascript
const siblings = ele => [].slice.call(ele.parentNode.children).filter((child) => (child !== ele));
~~~