~~~ javascript
const celsiusToFahrenheit = celsius => celsius * 9/5 + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

// Examples
celsiusToFahrenheit(15);    // 59
celsiusToFahrenheit(0);     // 32
celsiusToFahrenheit(-20);   // -4

fahrenheitToCelsius(59);    // 15
fahrenheitToCelsius(32);    // 0
~~~