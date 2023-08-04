function convert() {
    const tempInput = document.getElementById("temperature");
    const cInput = document.getElementById("celsius");
    const fInput = document.getElementById("fahrenheit");
    const kInput = document.getElementById("kelvin");
    const rInput = document.getElementById("rankine");
    const unitSelect = document.getElementById("unit");
  
    const temperatureValue = parseFloat(tempInput.value);
    const unitValue = unitSelect.value;
  
    if (!isNaN(temperatureValue)) {
      switch (unitValue) {
        case "celsius":
          cInput.value = temperatureValue;
          fInput.value = temperatureValue * 1.8 + 32;
          kInput.value = temperatureValue + 273.15;
          rInput.value = (temperatureValue + 273.15) * 1.8;
          break;
        case "fahrenheit":
          cInput.value = (temperatureValue - 32) / 1.8;
          fInput.value = temperatureValue;
          kInput.value = (temperatureValue + 459.67) * 5 / 9;
          rInput.value = temperatureValue + 459.67;
          break;
        case "kelvin":
          cInput.value = temperatureValue - 273.15;
          fInput.value = temperatureValue * 9 / 5 - 459.67;
          kInput.value = temperatureValue;
          rInput.value = temperatureValue * 1.8;
          break;
        case "rankine":
          cInput.value = (temperatureValue / 1.8) - 273.15;
          fInput.value = temperatureValue - 459.67;
          kInput.value = temperatureValue / 1.8;
          rInput.value = temperatureValue;
          break;
        default:
          console.log("Unknown unit: " + unitValue);
      }
    }
  }
  
    
  