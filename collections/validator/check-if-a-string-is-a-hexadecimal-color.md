~~~ javascript
const isHexColor = color => /^#([0-9A-F]{3}|[0-9A-F]{4}|[0-9A-F]{6}|[0-9A-F]{8})$/i.test(color);

// Examples
isHexColor('#012');         // true
isHexColor('#A1B2C3');      // true
isHexColor('012');          // false
isHexColor('#GHIJKL');      // false
~~~