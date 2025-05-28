function Calculate_BMI() {
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value;
    if(!weight || !height || weight < 0 || height < 0) {
        alert("Error! please enter an valid value...");
        return;
    }
    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmiValue').textContent = bmi;

    let category = '';
    if (bmi < 18.5) {
        category = 'Underweight';
    } 
    else if (bmi < 24.9) {
        category = 'Normal weight';
    } 
    else if (bmi < 29.9) {
        category = 'Overweight';
    } 
    else {
        category = 'Obesity';
    }

    document.getElementById("Category").textContent = `Category is: ${category}`;
    document.getElementById("result").style.display = "block";
}