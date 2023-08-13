const temperatureInput = document.getElementById('temperature');
const unitSelect = document.getElementById('unit');
const convertButton = document.getElementById('convert-btn');
const resultDiv = document.getElementById('result');

convertButton.addEventListener('click', convertTemperature);

function convertTemperature() {
    const temperature = parseFloat(temperatureInput.value);
    const unit = unitSelect.value;

    if (isNaN(temperature)) {
        resultDiv.innerHTML = "Please enter a valid temperature.";
        return;
    }

    let convertedTemperature;
    let convertedUnit;

    if (unit === 'celsius') {
        convertedTemperature = (temperature * 9 / 5) + 32;
        convertedUnit = 'Fahrenheit';
    } else {
        convertedTemperature = (temperature - 32) * 5 / 9;
        convertedUnit = 'Celsius';
    }

    resultDiv.innerHTML = `${temperature.toFixed(2)} ${unit} is ${convertedTemperature.toFixed(2)} ${convertedUnit}.`;
}
