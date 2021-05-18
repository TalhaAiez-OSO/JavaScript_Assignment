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