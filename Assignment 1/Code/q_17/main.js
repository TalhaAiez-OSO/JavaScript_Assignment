  const total_calories = document.getElementById('calories');
  const fats = document.getElementById('fats');

  const CALORIES_PER_GRAM_OF_FAT = 9;

  const output = document.getElementById('output_Q17');

  if(total_calories.value != "" || fats.value != ""){
    let percentage = (parseFloat(fats.value) * CALORIES_PER_GRAM_OF_FAT) / parseFloat(total_calories.value);
    percentage *= 100;
    if(percentage < 30){
      output.textContent = "The calories from fats are Less"
    }
    else{
      output.textContent = percentage;
    }

    if(total_calories.value <= 0)
      output.textContent = "Invalid Calorie Input";
    if(fats.value <= 0 || (parseInt(fats.value) * CALORIES_PER_GRAM_OF_FAT) > total_calories.value)
      output.textContent = "Invalid Fat Input";
  }
  else
    output.textContent = "Invalid Input";