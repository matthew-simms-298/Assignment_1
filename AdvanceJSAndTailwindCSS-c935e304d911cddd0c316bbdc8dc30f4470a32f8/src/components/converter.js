function convertUnits(inputID, outputID) {
    // Get the value from the input field
    let inputValue = document.getElementById(inputID).value;

    // Split the input values by comma and convert them to numbers
    let values = inputValue.split(',').map(Number);

    // Get the radio button that is clicked
    let radios = document.querySelector('input[type="radio"]:checked');
    let state = radios.id.toString();

    let results = [];
    for(let i = 0; i < values.length; i++) {
        let value = values[i];
        let result;
        switch(state) {
            case 'lbToKg':
                result = value * 0.45359237; // Pounds to Kilograms
                break;
            case 'kgToLb':
                result = value / 0.45359237; // Kilograms to Pounds
                break;
            case 'miToKm':
                result = value * 1.60934; // Miles to Kilometers
                break;
            case 'kmToMi':
                result = value / 1.60934; // Kilometers to Miles
                break;
            case 'cToF':
                result = (value * 9/5) + 32; // Celsius to Fahrenheit
                break;
            case 'fToC':
                result = (value - 32) * 5/9; // Fahrenheit to Celsius
                break;
            default:
                document.getElementById(outputID).value = "Invalid unit";
                return;
        }
        results.push(result.toFixed(2));
    }

    // Convert the results array to a string and set the value of the output field
    document.getElementById(outputID).value = results.join(', ');
}