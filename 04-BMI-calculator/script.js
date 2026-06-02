const ageInput = document.getElementById("age");
const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");
const tip = document.getElementById("tip");

function calculateBMI() {

    const age = Number(ageInput.value);
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if (age <= 0 || weight <= 0 || height <= 0) {

        alert("Please enter valid values.");

        return;
    }

    const heightInMeters = height / 100;

    const bmi =
        weight /
        (heightInMeters * heightInMeters);

    bmiValue.textContent =
        `Your BMI: ${bmi.toFixed(2)}`;

    if (bmi < 20) {

        category.textContent =
            "Category: Underweight ⚠️";

        tip.textContent =
            "Consider increasing your calorie intake with a balanced diet.";

    }

    else if (bmi < 25) {

        category.textContent =
            "Category: Normal Weight ✅";

        tip.textContent =
            "Excellent! Maintain your healthy lifestyle and stay active.";

    }

    else if (bmi < 30) {

        category.textContent =
            "Category: Overweight ⚠️";

        tip.textContent =
            "Regular exercise and a balanced diet can help improve your health.";

    }

    else {

        category.textContent =
            "Category: Obese 🚨";

        tip.textContent =
            "Consider consulting a healthcare professional for personalized advice.";

    }
}

function resetCalculator() {

    ageInput.value = "";
    weightInput.value = "";
    heightInput.value = "";

    bmiValue.textContent =
        "Your BMI: --";

    category.textContent =
        "Category: --";

    tip.textContent =
        "Enter your details above.";
}

calculateBtn.addEventListener(
    "click",
    calculateBMI
);

resetBtn.addEventListener(
    "click",
    resetCalculator
);