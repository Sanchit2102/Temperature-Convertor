const celsiusInput = document.querySelector("#celsius input");
const fahrenheitInput = document.querySelector("#fahrenheit input");
const kelvinInput = document.querySelector("#kelvin input");
const btn = document.querySelector("button");

const round = (number) => {
  return Math.round(number);
};

function updateTemperatures() {
  // Read the Celsius input value
  const celsius = parseFloat(celsiusInput.value);

  // Compute the Fahrenheit and Kelvin values
  const fahrenheit = (celsius * 9) / 5 + 32;
  const kelvin = celsius + 273.15;

  // Update the Fahrenheit and Kelvin input fields with the new values
  //   fahrenheitInput.value = fahrenheit.toFixed(2);
  //   kelvinInput.value = kelvin.toFixed(2);
  fahrenheitInput.value = round(fahrenheit);
  kelvinInput.value = round(kelvin);
}

// Listen for changes in the Celsius input field
celsiusInput.addEventListener("input", updateTemperatures);

// Listen for changes in the Fahrenheit input field
fahrenheitInput.addEventListener("input", function () {
  // Read the Fahrenheit input value
  const fahrenheit = parseFloat(fahrenheitInput.value);

  // Compute the Celsius and Kelvin values
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const kelvin = ((fahrenheit + 459.67) * 5) / 9;

  // Update the Celsius and Kelvin input fields with the new values
//   celsiusInput.value = celsius.toFixed(2);
//   kelvinInput.value = kelvin.toFixed(2);
  celsiusInput.value = round(celsius);
  kelvinInput.value = round(kelvin);
});

// Listen for changes in the Kelvin input field
kelvinInput.addEventListener("input", function () {
  // Read the Kelvin input value
  const kelvin = parseFloat(kelvinInput.value);

  // Compute the Celsius and Fahrenheit values
  const celsius = kelvin - 273.15;
  const fahrenheit = (kelvin * 9) / 5 - 459.67;

  // Update the Celsius and Fahrenheit input fields with the new values
//   celsiusInput.value = celsius.toFixed(2);
//   fahrenheitInput.value = fahrenheit.toFixed(2);
   celsiusInput.value = round(celsius);
   kelvinInput.value = round(kelvin);
});

btn.addEventListener("click", () => {
  celsiusInput.value = "";
  fahrenheitInput.value = "";
  kelvinInput.value = "";
});
