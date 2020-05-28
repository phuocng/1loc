~~~ javascript
const noop = () => {};

// Or
const noop = Function();
// calling Function() might be detected as using eval by some security tools
~~~
