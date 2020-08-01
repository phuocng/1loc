~~~ javascript
const characterCount = (input, character) => input.split(character).length - 1
// Or
const characterCount = (input, character) => input.replace((new RegExp(String.raw`[^${character}]`, 'g')), '').length;

// Examples
characterCount('192.168.1.1', '.');     // 3
characterCount('star wars', 's');       // 2
~~~