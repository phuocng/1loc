~~~ javascript
const bytes = str => new Blob([str]).size;

// Examples
bytes('hello world');       // 11
bytes('🎉');                // 4
~~~