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