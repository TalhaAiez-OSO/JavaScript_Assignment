// ignore this code completely
document.addEventListener("DOMContentLoaded", () => {
  const inputs = document.querySelectorAll("input:not(input[type=submit])");
  const outputs = document.querySelectorAll("h3");
  const refresh_values = () => {
    for (const input of inputs) {
      window[input.name] = input.value;
    }
  };
  
  document.getElementById("submit_Q1").onclick = () => {
    refresh_values();
    Q1();
  };

  document.getElementById("submit_Q2").onclick = () => {
    refresh_values();
    Q2();
  };

  document.getElementById("submit_Q3").onclick = () => {
    refresh_values();
    Q3();
  };

  document.getElementById("submit_Q4").onclick = () => {
    refresh_values();
    Q4();
  };

  document.getElementById("submit_Q5").onclick = () => {
    refresh_values();
    Q5();
  };

  document.getElementById("submit_Q6").onclick = () => {
    refresh_values();
    Q6();
  };

  document.getElementById("submit_Q7").onclick = () => {
    refresh_values();
    Q7();
  };

  document.getElementById("submit_Q8").onclick = () => {
    refresh_values();
    Q8();
  };

  document.getElementById("submit_Q9").onclick = () => {
    refresh_values();
    Q9();
  };

  document.getElementById("submit_Q10").onclick = () => {
    refresh_values();
    Q10();
  };

  document.getElementById("submit_Q11").onclick = () => {
    refresh_values();
    Q11();
  };

  document.getElementById("submit_Q12").onclick = () => {
    refresh_values();
    Q12();
  };

  document.getElementById("submit_Q13").onclick = () => {
    refresh_values();
    Q13();
  };

  document.getElementById("submit_Q14").onclick = () => {
    refresh_values();
    Q14();
  };

  document.getElementById("submit_Q15").onclick = () => {
    refresh_values();
    Q15();
  };

  document.getElementById("submit_Q16").onclick = () => {
    refresh_values();
    Q16();
  };

  document.getElementById("submit_Q17").onclick = () => {
    refresh_values();
    Q17();
  };

  document.getElementById("submit_Q18").onclick = () => {
    refresh_values();
    Q18();
  };

  document.getElementById("submit_Q19").onclick = () => {
    refresh_values();
    Q19();
  };

  document.getElementById("submit_Q20").onclick = () => {
    refresh_values();
    Q20();
  };
});

function Q1(){
  const input = document.getElementById('num_Q1');
  const output = document.getElementById('output_Q1');
  if(input.value == "")
    output.textContent = "Invalid Input";
  else{
    output.textContent = (input.value % 2 == 0) ? "Even" : "Odd";
  }
}

function Q2(){
  const input = document.getElementById('num_Q2');
  const output = document.getElementById('output_Q2');
  if(input.value == "")
    output.textContent = "Invalid Input";
  else{
    let positive = (input.value <= 0) ? "Negative" : "Positive";
    let decimal = (input.value % 1 == 0) ? "Number" : "Decimal";
    output.textContent = positive + " " + decimal;
  }
}

function Q3(){
  const input = document.getElementById('celTemp');
  const output = document.getElementById('output_Q3');
  console.log(input.value);
  if(input.value == "")
    output.textContent = "Invalid Input";
  else{
    output.textContent = ((input.value - 32)*5) / 9 + " F";
  }
}

function Q4(){
  const YEN_TO_DOLLAR = 109.33;
  const EURO_TO_DOLLAR = 0.83;
  const input = document.getElementById('dollarAmount');
  const output1 = document.getElementById('output_1_Q4');
  const output2 = document.getElementById('output_2_Q4');
  if(input.value == "" || input.value <= 0)
    output1.textContent = "Invalid Input";
  else{
    output1.textContent = input.value * YEN_TO_DOLLAR + " Yen";
    output2.textContent = input.value * EURO_TO_DOLLAR + " Euro";
  }
}

function Q5(){
  const input1 = document.getElementById('score1');
  const input2 = document.getElementById('score2');
  const input3 = document.getElementById('score3');
  const output = document.getElementById('output_Q5');

  if(input1.value == "" || input2.value == "" || input3.value == "")
    output.textContent = "Invalid Input";
  else{
    let averageScore = (parseFloat(input1.value) + parseFloat(input2.value) + parseFloat(input3.value)) / 3;
    if(averageScore > 100.0)
      output.textContent = "Congratulation! That's a perfect score!";
    else
      output.textContent = "Score is " + averageScore + "%";
  }
}

function Q6(){
  const input = document.getElementById('score');
  const output = document.getElementById('output_Q6');

  if(input.value == "")
    output.textContent = "Invalid Input";
  else{
    if(input.value >= 90 && input.value <= 100)
      output.textContent = "A Grade";
    else if(input.value >= 80 && input.value <= 89)
      output.textContent = "B Grade";
    else if(input.value >= 70 && input.value <= 79)
      output.textContent = "C Grade";
    else if(input.value >= 60 && input.value <= 69)
      output.textContent = "D Grade";
    else if(input.value >= 50 && input.value <= 59)
      output.textContent = "E Grade";
    else if(input.value < 50)
      output.textContent = "F Grade";
    else
      output.textContent = "Invalid Grade";
  }
}

function Q7(){
  const input1 = document.getElementById('num1_Q7');
  const input2 = document.getElementById('num2_Q7');
  const output1 = document.getElementById('output_SmallerNumber');
  const output2 = document.getElementById('output_LargerNumber');

  if(input1.value == "" || input2.value == "")
    output1.textContent = "Invalid Input";
  else{
    if(input1.value == input2.value){
      output1.textContent = input1.value + " Equal";
      output2.textContent = input2.value + " Equal";
    }
    else if(input1.value > input2.value){
      output1.textContent = input1.value + " Larger";
      output2.textContent = input2.value + " Smaller";
    }
    else{
      output1.textContent = input1.value + " Smaller";
      output2.textContent = input2.value + " Larger";
    }
  }
}

function Q8(){
  const input = document.getElementById('num_Q8');
  const output = document.getElementById('output_Q8');

  if(input.value == "" || (input.value <= 0 && input.value > 10))
    output.textContent = "Invalid Input";
  else{
    switch(input.value){
      case "1":
        output.textContent = "I";
        break;
      case "2":
        output.textContent = "II";
        break;
      case "3":
        output.textContent = "III";
        break;
      case "4":
        output.textContent = "IV";
        break;
      case "5":
        output.textContent = "V";
        break;
      case "6":
        output.textContent = "VI";
        break;
      case "7":
        output.textContent = "VII";
        break;
      case "8":
        output.textContent = "VIII";
        break;
      case "9":
        output.textContent = "IX";
        break;
      case "10":
        output.textContent = "X";
        break;
    }
  }
}

function Q9(){
  const length1 = document.getElementById('length1');
  const width1 = document.getElementById('width1');

  const length2 = document.getElementById('length2');
  const width2 = document.getElementById('width2');

  const output = document.getElementById('output_Q9');
  if(length1.value == "" || width1.value == "" || length2.value == "" || width2.value == "")
    output.textContent = "Invalid Input";
  else{
    const area1 = parseInt(length1.value) * parseInt(width1.value);
    const area2 = parseInt(length2.value) * parseInt(width2.value);
    if(area1 == area2)
      output.textContent = "Triangles are Equal";

    else if(area1 > area2)
      output.textContent = "Triangel 1 has Greater Area";
    
    else 
      output.textContent = "Triangle 2 has Greater Area";
  }
}

function Q10(){
  const day = document.getElementById('day');
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  const output = document.getElementById('output_Q10');

  if(day.value == "" || month.value == "" || year.value == "")
    output.textContent = "Invalid Input";
  else if(day.value <= 0 || day.value > 31)
    output.textContent = "Invalid Date";
  else if(month.value <= 0 || month.value > 12)
    output.textContent = "Invalid Date";
  else if(year.value <= 0 || year.value > 99)
    output.textContent = "Invalid Date";
  
  else{
    if((parseInt(day.value) * parseInt(month.value)) == year.value)
      output.textContent = "This is a magic date!";
    else
      output.textContent = "This is not a magic date";
  }
}

function Q11(){
  const mass = document.getElementById('mass');
  const output = document.getElementById('output_Q11');

  if(mass.value == "")
    output.textContent = "Invalid Input";
  else{
    const weight = parseFloat(mass.value) * 9.8;
    if(weight > 1000)
      output.textContent = "Object is too heavy";
    else if(weight < 10)
      output.textContent = "Object is too light";
    else
      output.textContent = "Weight of Object is: " + weight;
  }
}

function Q12(){
  const num1 = document.getElementById('1stNumber');
  const num2 = document.getElementById('2ndNumber');
  const answer = document.getElementById('answer');
  const output = document.getElementById('output_Q12');

  if(answer.value == "")
    output.textContent = "Invalid Input";
  else{
    const correctAnswer = parseInt(num1.textContent) + parseInt(num2.textContent);
    if(correctAnswer == answer.value)
      output.textContent = "Correct!"
    else
      output.textContent = "Correct answer is: " + correctAnswer;
  }
}

function Q13(){
  const seconds = document.getElementById('seconds');
  const output = document.getElementById('output_Q13')
  if(seconds.value == "")
    output.textContent = "Invalid Input";
  else{
    if(seconds.value >= 86400)
      output.textContent = "Number of Days are: " + parseInt(seconds.value)/86400;
    else if(seconds.value >= 3600 && seconds.value < 86400)
      output.textContent = "Number of Hours are: " + parseInt(seconds.value)/3600;
    else if(seconds.value >= 60 && seconds.value < 3600)
      output.textContent = "Number of Minutes are: " + parseInt(seconds.value)/60;
  }
}

function Q14(){
  const units = document.getElementById('unitsPurchased');
  const output = document.getElementById('output_Q14');
  const RETAIL_PRICE = 99;
  let discount;

  if(units == "")
    output.textContent = "Invalid Input";
  else{
    if(units.value >= 10 && units.value < 20)
      discount = 0.2;
    else if(units.value >= 20 && units.value < 50)
      discount = 0.3;
    else if(units.value >= 50 && units.value < 100)
      discount = 0.4;
    else if(units.value >= 100)
      discount = 0.5;
    else
      discount = 0;
    
    let totalPrice = RETAIL_PRICE * parseInt(units.value);
    output.textContent = "Total Price: " + (totalPrice - (totalPrice * discount)) + "$"; 
  }
}

function Q15(){
  const checks = document.getElementById('checks');
  const output = document.getElementById('output_Q15');
  const FEE_PER_MONTH = 10;
  let additionalFees;
  if(checks.value == "" || checks.value < 0)
    output.textContent = "Invalid Input";
  else{
    if(checks.value < 20)
      additionalFees = 0.10;
    else if(checks.value >= 20 && checks.value <= 39)
      additionalFees = 0.80;
    else if(checks.value >= 40 && checks.value <= 59)
      additionalFees = 0.06;
    else if(checks.value >= 60)
      additionalFees = 0.04;

    output.textContent = "Total Fee: " + ((parseInt(checks.value) * additionalFees) + FEE_PER_MONTH) + "$";
  }
}

function Q16(){
  const radius = document.getElementById('radius_Q16');
  const length = document.getElementById('length_Q16');
  const width = document.getElementById('width_Q16');
  const base_Length = document.getElementById('base_length_Q16');
  const height = document.getElementById('height_Q16');

  const PIE = 3.1415;

  const area_of_circle_output = document.getElementById('output1_Q16');
  const area_of_rectangle_output = document.getElementById('output2_Q16');
  const area_of_triangle_output = document.getElementById('output3_Q16');

  if(radius.value != ""){
    area_of_circle_output.textContent = "Area of Circle is: " + PIE * (parseFloat(radius.value) * parseFloat(radius.value));
  }
  if(length.value != "" && width.value != ""){
    area_of_rectangle_output.textContent = "Area of Rectangle is: " + parseFloat(length.value) * parseFloat(width.value);
  }
  if(base_Length.value != "" && height.value != ""){
    area_of_triangle_output.textContent = "Area of Triangle is: " + (parseFloat(height.value) * parseFloat(base_Length.value)) / 2;
  }
}

function Q17(){
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
}

function Q18(){
  const wavelength = document.getElementById('wavelength');
  const output = document.getElementById('output_Q18');

  if(wavelength.value != ""){
    if(wavelength.value <= (1e-11))
      output.textContent = "Gamma Rays";
    else if(wavelength.value <= (1e-8) && wavelength.value > (1e-11))
      output.textContent = "X Rays";
    else if(wavelength.value <= (4e-7) && wavelength.value > (1e-8))
      output.textContent = "Ultraviolet";
    else if(wavelength.value <= (7e-7) && wavelength.value > (4e-7))
      output.textContent = "Visible Light";
    else if(wavelength.value <= (1e-3) && wavelength.value > (7e-7))
      output.textContent = "Infrared";
    else if(wavelength.value <= (1e-2) && wavelength.value > (1e-3))
      output.textContent = "Microwave";
    else if(wavelength.value >= (1e-2))
      output.textContent = "Radio Waves"
  }
}

function Q19(){
  const CustomerName = document.getElementById('CustomerName');
  const PackageName = document.getElementById('PackageName');
  const hoursUsed = document.getElementById('hoursUsed');

  const customerOutput = document.getElementById('output1_Q19');
  const packageOutput = document.getElementById('output2_Q19');
  const hoursUsedOutput = document.getElementById('output3_Q19');
  const dueAmountOutput = document.getElementById('output4_Q19');

  if(CustomerName.value != "" || PackageName.value != "" || (hoursUsed.value != "" && !(hoursUsed.value > 744))){
    customerOutput.textContent = "Customer Name: " + CustomerName.value;
    if(PackageName.value == "A"){
      packageOutput.textContent = "Package Name: A";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      if(hoursUsed.value <= 10)
        dueAmountOutput.textContent = "Due Amount: " + 9.95;
      else
        dueAmountOutput.textContent = "Due Amount: " + 9.95 * (parseInt(hoursUsed.value) * 2);
    }

    else if(PackageName.value == "B"){
      packageOutput.textContent = "Package Name: B";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      if(hoursUsed.value <= 20)
        dueAmountOutput.textContent = "Due Amount: " + 14.95;
      else
        dueAmountOutput.textContent = "Due Amount: " + 14.95 * (parseInt(hoursUsed.value) * 1);
    }
    else if(PackageName.value == "C"){
      packageOutput.textContent = "Package Name: C";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      dueAmountOutput.textContent = "Due Amount: " + 19.95;
    }
    else{
      packageOutput.textContent = "Package Name: Invalid Input";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      dueAmountOutput.textContent = "Due Amount: N/A";
    }
  }
}

function Q20(){
  const hour = document.getElementById('timeHour');
  const min = document.getElementById('timeMin');
  const talk_minutes = document.getElementById('TalkMinutes');
  const FeeOutput = document.getElementById('output1_Q20');
  const TimeOutput = document.getElementById('output2_Q20');

  if(hour.value == "" || min.value == "" || talk_minutes.value == "" )
    output.textContent = "Invalid Input";
  else{
    if(hour.value >= 0 && hour.value <= 23 && min.value >= 0 && min.value <= 59){
      if(hour.value >= 0 && hour.value <= 6 && min.value >= 0 && min.value <= 59){
        FeeOutput.textContent = "Total Cost: $" + 0.12 * parseFloat(talk_minutes.value);
        TimeOutput.textContent = "Call Started at " + hour.value + ":" + min.value + " for " + talk_minutes.value + " minutes";
      }
      else if(hour.value >= 7 && hour.value <= 19 && min.value >= 0 && min.value <= 0){
        FeeOutput.textContent = "Total Cost: $" + 0.55 * parseFloat(talk_minutes.value);
        TimeOutput.textContent = "Call Started at " + hour.value + ":" + min.value + " for " + talk_minutes.value + " minutes";
      }
      else if(hour.value >= 19 && hour.value <= 23 && min.value >= 1 && min.value <= 59){
        FeeOutput.textContent = "Total Cost: $" + 0.55 * parseFloat(talk_minutes.value);
        TimeOutput.textContent = "Call Started at " + hour.value + ":" + min.value + " for " + talk_minutes.value + " minutes";
      }
    }
    else
      output.textContent = "Invalid Input";
  }
}