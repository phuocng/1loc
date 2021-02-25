~~~ javascript
const getTimezone = () => Intl.DateTimeFormat().resolvedOptions().timeZone;

// Example
getTimezone();      // 'Asia/Saigon'
~~~