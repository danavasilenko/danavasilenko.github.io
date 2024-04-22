document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    calculateBMI();
});

function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert height to meters
    const bmi = weight / (height * height);
    displayResult(bmi);
}

function displayResult(bmi) {
    let resultText = 'Your BMI is ' + bmi.toFixed(2) + '. ';
    if (bmi < 18.5) {
        resultText += 'You are underweight.';
    } else if (bmi < 25) {
        resultText += 'You have a normal weight.';
    } else if (bmi < 30) {
        resultText += 'You are overweight.';
    } else {
        resultText += 'You are obese.';
    }
    document.getElementById('result').innerText = resultText;
}
