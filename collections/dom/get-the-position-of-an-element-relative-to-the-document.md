~~~ javascript
const getPosition = ele => (r = ele.getBoundingClientRect(), { left: r.left + window.scrollX, top: r.top + window.scrollY });

// Example
getPosition(document.body);     // { left: 0, top: 0 }
~~~