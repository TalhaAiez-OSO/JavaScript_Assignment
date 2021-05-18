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