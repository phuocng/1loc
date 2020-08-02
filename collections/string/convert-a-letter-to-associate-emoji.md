~~~ javascript
const letterToEmoji = c => String.fromCodePoint(c.toLowerCase().charCodeAt() + 127365);

// Examples
letterToEmoji('a');     // 🇦
letterToEmoji('b');     // 🇧
~~~