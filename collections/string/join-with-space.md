~~~ javascript
const joinWithSpace = (...args) => args.join(' ');

// Example
joinWithSpace('hi', 'my', 'friend');      // 'hi my friend'
joinWithSpace('hi', joinWithSpace('my', 'friend'));      // 'hi my friend'
joinWithSpace(joinWithSpace('hi'), 'my', 'friend');      // 'hi my friend'
~~~
