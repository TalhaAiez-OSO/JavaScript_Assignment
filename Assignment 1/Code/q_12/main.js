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