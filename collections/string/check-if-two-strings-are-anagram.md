~~~ javascript
const areAnagrams = (str1, str2) => (alphagram = (word) => word.toLowerCase().split('').sort().join('').normalize('NFD').replace(/[^\w]/g, '')) && alphagram(str1) == alphagram(str2);

// OR: (one-liners are good to brag, not always good to maintain)
// An alphagram is a word rearranged with letters in alphabetical order.
const alphagram = (word) => word.toLowerCase().split('').sort().join('').normalize('NFD').replace(/[^\w]/g, '');
const anagrams = (str1, str2) => alphagram(str1) == alphagram(str2);

// areAnagrams('listen', 'silent') === true
// areAnagrams('New York Times', 'monkeys write') === true
// areAnagrams('forty-five', 'over forty') === true
// areAnagrams('pâté', 'tape') === true
~~~
