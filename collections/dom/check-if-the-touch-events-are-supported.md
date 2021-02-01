~~~ javascript
const touchSupported = () => ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch);
~~~