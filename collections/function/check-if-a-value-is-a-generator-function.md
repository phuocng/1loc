~~~ javascript
const isGeneratorFunction = v => Object.prototype.toString.call(v) === '[object GeneratorFunction]';

// Examples
isGeneratorFunction(function() {});     // false
isGeneratorFunction(function*() {});    // true
~~~