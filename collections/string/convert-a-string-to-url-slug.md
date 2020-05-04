~~~ javascript
const slugify = string => string.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');

slugify('Chapter One: Once upon a time...') === 'chapter-one-once-upon-a-time'
~~~
