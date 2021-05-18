const input = document.getElementById('celTemp');
const output = document.getElementById('output_Q3');
if(input.value == "")
  output.textContent = "Invalid Input";
else{
  output.textContent = ((input.value - 32)*5) / 9 + " F";
}