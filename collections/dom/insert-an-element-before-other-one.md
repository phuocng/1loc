~~~ javascript
const insertBefore = (ele, anotherEle) => anotherEle.parentNode.insertBefore(ele, anotherEle);

// Or
const insertBefore = (ele, anotherEle) => anotherEle.insertAdjacentElement('beforebegin', ele);
~~~