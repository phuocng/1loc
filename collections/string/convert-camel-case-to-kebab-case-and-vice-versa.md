~~~ javascript
const kebabToCamel = str => str.replace(/-./g, m => m.toUpperCase()[1]);

// kebabToCamel('background-color') === 'backgroundColor';

const camelToKebab = str => str.replace(/([a-z0-9])([A-Z])/g, '$1-$2').toLowerCase();

// camelToKebab('backgroundColor') === 'background-color';
~~~
