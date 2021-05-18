const input = document.getElementById('num_Q1');
const output = document.getElementById('output_Q1');
if(input.value == "")
  output.textContent = "Invalid Input";
else{
  output.textContent = (input.value % 2 == 0) ? "Even" : "Odd";
}