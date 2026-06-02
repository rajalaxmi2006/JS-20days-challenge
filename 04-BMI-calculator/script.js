const weightInput = document.getElementById("weight");
const heightInput = document.getElementById("height");

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");

const bmiValue = document.getElementById("bmiValue");
const category = document.getElementById("category");
const tip = document.getElementById("tip");

function calculateBMI(){
    const weight = Number(weightInput.value);
    const height = Number(heightInput.value);

    if(weight <= 0 || height <=0){
        alert("Please enter valid values:");
        return;
    }

    const heightInMeters=height/100;

    const bmi=weight/(heightInMeters*heightInMeters);

    bmiValue.textContent=`Your BMI : ${bmi.toFixed(2)}`;

    if(bmi<18.5){
        category.textContent="Category: Underweight ⚠️"

        tip.textContent="Consider a balanced diet with adequate nutrition."
    }

    else if(bmi < 25){
        category.textContent="Category: Normal weight ✅";

        tip.textContent =
            "Great job! Keep maintaining a healthy lifestyle.";
    } else if (bmi < 30) {

        category.textContent =
            "Category: Overweight ⚠️";

        tip.textContent =
            "Regular exercise and healthy eating can help.";

    } else {

        category.textContent =
            "Category: Obese 🚨";

        tip.textContent =
            "Consider consulting a healthcare professional.";
        }
}

function resetCalculator(){
    weightInput.value="";
    heightInput.value="";

    bmiValue.textContent="Your BMI : ";
    category.textContent="Category : ";
    tip.textContent="Enter your details above.";
}

calculateBtn.addEventListener("click" , calculateBMI);

resetBtn.addEventListener("click" , resetCalculator);