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