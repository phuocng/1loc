~~~ javascript
const trim = (str, char) => str.split(char).filter(Boolean).join();

// Examples
trim('/hello world//', '/');        // hello world
trim('"hello world"', '"');         // hello world
trim('   hello world ', ' ');       // hello world
~~~