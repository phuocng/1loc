~~~ javascript
const isGeneratorFunction = v => Object.prototype.toString.call(v) === '[object GeneratorFunction]';

// Example
isGeneratorFunction(function() {});     // false
isGeneratorFunction(function*() {});    // true
~~~
