// var inputCelsius = document.getElementById("url");
// function celsiusConverter(val) {
//     // Parse the input value as a number
//     val = parseFloat(val);
//     // Calculate the Fahrenheit and Kelvin values using the formulas
//     var fahrenheit = (val * 1.8) + 32;
//     // Display the results in the corresponding input elements
//     url.value = fahrenheit;
//   }
  
//   // Define a function to convert from Fahrenheit to Celsius and Kelvin
//   function fahrenheitConverter(val) {
//     // Parse the input value as a number
//     val = parseFloat(val);
//     // Calculate the Celsius and Kelvin values using the formulas
//     var celsius = (val - 32) * (5 / 9);
//     // Display the results in the corresponding input elements
//     url.value = celsius;
//   }
  
function celciusConverter(valNum) {
  valNum=parseInt(valNum);
  document.getElementById("outputCelcius").innerHTML= (valNum - 32) * (5 / 9) + " C";
  document.getElementById("outputKelvin").innerHTML= (valNum - 32) * (5 / 9) + 273.15 + " K";
  
}
