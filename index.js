// Complete the following functions to make our program work!

/**
 * Converts the given Fahrenheit temperature `f` to Celsius.
 * @param {number} f temperature in °F
 * @returns {number} temperature in °C
 */
function convertToCelsius(f) {
    // TODO
    return (f - 32) / 1.8
  }
  
  /**
   * | Temperature | Description |
   * | ----------- | ----------- |
   * | < 32        | "very cold" |
   * | < 64        | "cold"      |
   * | < 86        | "warm"      |
   * | < 100       | "hot"       |
   * | >= 100      | "very hot"  |
   *
   * @param {number} f temperature in °F
   * @returns {string} the description from the table above corresponding to
   * the given Fahrenheit temperature `f`
   */
  function describeTemperature(f) {
    // TODO
    let message = ' ';
    const tempF = f * 1;

    if (tempF < 32) {
      message = 'very cold'
    } else if (tempF < 64 ){
      message = 'cold'
    } else if (tempF < 86 ){
      message = 'warm'
    } else if (tempF < 100 ){
      message = 'hot'
    } else if (tempF >= 100 ){
      message = 'very hot'
    }

    return message;
    }
  
  /**
   * @param {number} limit
   * @returns {number} a random integer in the range [0, `limit`)
   */
  function getRandomInt(limit) {
    //limit == a number that is the highest range of numbers to choose from
    // TODO
    return Math.round(Math.random()*limit);
  }
  
  // -------------------- DO NOT CHANGE THE CODE BELOW ---------------------- //
  /**
   * Converts the given temperature from Fahrenheit to Celsius,
   * then alerts the user with a descriptive message.
   * @param {number} f temperature in °F
   */
  function parseFahrenheit(f) {
    const c = convertToCelsius(f);
    const description = describeTemperature(f);
    const message = `${f}°F is ${c}°C. That is ${description}.`;
    alert(message);
  }
  
  const fahrenheitPrompt =
    "Please enter a number. We will convert that temperature from Fahrenheit to Celsius.";
  let f = prompt(fahrenheitPrompt);
  parseFahrenheit(+f);
  
  alert("Let's try that again.");
  f = prompt(fahrenheitPrompt);
  parseFahrenheit(+f);
  
  alert("Let's try some random temperatures.");
  f = getRandomInt(110);
  parseFahrenheit(f);
  
  f = getRandomInt(110);
  parseFahrenheit(f);