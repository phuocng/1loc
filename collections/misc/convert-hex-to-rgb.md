~~~ javascript
const hexToRgb = hex => hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, (_, r, g, b) => `#${r}${r}${g}${g}${b}${b}`).substring(1).match(/.{2}/g).map(x => parseInt(x, 16));

// Examples
hexToRgb('#00ffff');    // [0, 255, 255] 
hexToRgb('#0ff');       // [0, 255, 255]
~~~