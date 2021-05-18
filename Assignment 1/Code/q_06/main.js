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