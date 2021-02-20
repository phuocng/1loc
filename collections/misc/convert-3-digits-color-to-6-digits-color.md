~~~ javascript
const toFullHexColor = color => `#${(color.startsWith('#') ? color.slice(1) : color).split('').map(c => `${c}${c}`).join('')}`;

// Example
toFullHexColor('123');      // '#112233'
toFullHexColor('#123');     // '#112233'
toFullHexColor('#abc');     // '#aabbcc'
~~~