const input = document.getElementById('num_Q2');
const output = document.getElementById('output_Q2');
if(input.value == "")
  output.textContent = "Invalid Input";
else{
  let positive = (input.value <= 0) ? "Negative" : "Positive";
  let decimal = (input.value % 1 == 0) ? "Number" : "Decimal";
  output.textContent = positive + " " + decimal;
}