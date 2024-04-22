function calculateBMI() {
    var weight = document.getElementById('weight').value;
    var height = document.getElementById('height').value;
    if (weight > 0 && height > 0) {
      var bmi = (weight / ((height * height) / 10000)).toFixed(2);
      var result = document.getElementById('bmi-result');
      result.innerHTML = `Your BMI is ${bmi}.`;
      if (bmi < 18.5) {
        result.innerHTML += " You are underweight.";
      } else if (bmi >= 18.5 && bmi <= 24.9) {
        result.innerHTML += " You have a normal weight.";
      } else if (bmi >= 25 && bmi <= 29.9) {
        result.innerHTML += " You are overweight.";
      } else {
        result.innerHTML += " You are obese.";
      }
      document.getElementById('refreshButton').style.display = 'block';
      document.getElementById('adviceButton').style.display = 'block';
      document.getElementById('calculateButton').style.display = 'none';
    } else {
      document.getElementById('bmi-result').innerHTML = "Please enter valid numbers.";
      document.getElementById('refreshButton').style.display = 'block';
      document.getElementById('calculateButton').style.display = 'none';
    }
    
  }

  function resetCalculator() {
    document.getElementById('weight').value = '';
    document.getElementById('height').value = '';
    document.getElementById('bmi-result').textContent = '';
    document.getElementById('refreshButton').style.display = 'none';
    document.getElementById('adviceButton').style.display = 'none';
    document.getElementById('adviceText').style.display = 'none';
    document.getElementById('calculateButton').style.display = 'block';
  }

  function showAdvice() {
    var bmiResult = document.getElementById('bmi-result').textContent;
    var adviceText = '';
  
    if (bmiResult.includes('underweight')) {
      adviceText = 'It’s important to eat a balanced diet that includes a variety of nutrients. Consider consulting with a nutritionist to create a plan that suits your needs.';
    } else if (bmiResult.includes('normal')) {
      adviceText = 'Continue to maintain a healthy lifestyle through a balanced diet and regular physical activity. Remember, consistency is key to long-term health.';
    } else if (bmiResult.includes('overweight')) {
      adviceText = 'Consider incorporating more fruits, vegetables, and whole grains into your diet while increasing your daily physical activity. Making small, sustainable changes can have a big impact over time.';
    } else if (bmiResult.includes('obese')) {
      adviceText = 'Your BMI indicates obesity, which can increase health risks. It’s advisable to seek guidance from a healthcare provider to develop a personalized plan that may include dietary changes, increased physical activity, and other health-supportive strategies.';
    }
  
    document.getElementById('adviceText').innerHTML = adviceText;
    document.getElementById('adviceText').style.display = 'block';
  }
  
  