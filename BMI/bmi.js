let selectedGender = "male";

function selectGender(gender) {
  document.getElementById("male").classList.remove("active");
  document.getElementById("female").classList.remove("active");
  document.getElementById(gender).classList.add("active");
  selectedGender = gender;
}

function updateHeight() {
  let height = document.getElementById("height");
  let heightValue = document.getElementById("heightValue");

  heightValue.innerText = height.value + " cm";

  let percentage =
    ((height.value - height.min) / (height.max - height.min)) * 100;
  height.style.background = `linear-gradient(to right, #4caf50 ${percentage}%, #ddd ${percentage}%)`;
}

function adjustWeight(value) {
  let weight = document.getElementById("weight");
  let weightValue = parseInt(weight.value) || 0;
  weight.value = Math.max(1, weightValue + value);
}

function adjustAge(value) {
  let age = document.getElementById("age");
  let ageValue = parseInt(age.value) || 0;
  age.value = Math.max(1, ageValue + value);
}

function calculateBMI() {
  let height = document.getElementById("height").value;
  let weight = document.getElementById("weight").value;
  let age = document.getElementById("age").value;

  if (!height || !weight || !age) {
    alert("Masukkan berat, tinggi badan, dan umur yang valid!");
    return;
  }

  let heightInMeters = height / 100;
  let bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
  let category = "";
  let adjustedBMI = parseFloat(bmi);

  if (selectedGender === "male") {
    adjustedBMI = (bmi * 1.08).toFixed(2); 
    if (age > 50) {
      adjustedBMI = (adjustedBMI * 0.98).toFixed(2); 
    }

    if (adjustedBMI < 20) {
      category = "Underweight";
    } else if (adjustedBMI < 26) {
      category = "Normal weight";
    } else if (adjustedBMI < 31) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
  } else {
    adjustedBMI = (bmi * 0.92).toFixed(2); 
    if (age > 50) {
      adjustedBMI = (adjustedBMI * 1.02).toFixed(2); 
    }

    if (adjustedBMI < 18.5) {
      category = "Underweight";
    } else if (adjustedBMI < 24.5) {
      category = "Normal weight";
    } else if (adjustedBMI < 29.5) {
      category = "Overweight";
    } else {
      category = "Obesity";
    }
  }

  document.getElementById("bmiValue").innerText = adjustedBMI;
  document.getElementById("bmiCategory").innerText = category;
  document.getElementById("calculatorPage").style.display = "none";
  document.getElementById("resultPage").style.display = "block";
}

function goBack() {
  document.getElementById("calculatorPage").style.display = "block";
  document.getElementById("resultPage").style.display = "none";
}

updateHeight();
