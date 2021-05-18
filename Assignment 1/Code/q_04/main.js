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