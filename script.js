document.getElementById('bmiForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const height = parseFloat(document.getElementById('height').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const resultDiv = document.getElementById('result');
  
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultDiv.textContent = 'Please enter valid values!';
      resultDiv.style.color = 'red';
      return;
    }
  
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters ** 2)).toFixed(2);
  
    let message = `Your BMI is ${bmi}. `;
  
    if (bmi < 18.5) {
      message += 'You are underweight.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
      message += 'You have a normal weight.';
    } else if (bmi >= 25 && bmi < 29.9) {
      message += 'You are overweight.';
    } else {
      message += 'You are obese.';
    }
  
    resultDiv.textContent = message;
    resultDiv.style.color = '#111';
  });
  