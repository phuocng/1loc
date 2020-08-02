~~~ javascript
const characterCount = (str, char) => str.split(char).length - 1;

// Or
const characterCount = (str, char) => str.replace((new RegExp(String.raw`[^${char}]`, 'g')), '').length;

// Examples
characterCount('192.168.1.1', '.');     // 3
characterCount('star wars', 's');       // 2
~~~