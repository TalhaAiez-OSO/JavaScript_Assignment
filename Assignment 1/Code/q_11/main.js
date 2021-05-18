  const mass = document.getElementById('mass');
  const output = document.getElementById('output_Q11');

  if(mass.value == "")
    output.textContent = "Invalid Input";
  else{
    const weight = parseFloat(mass.value) * 9.8;
    if(weight > 1000)
      output.textContent = "Object is too heavy";
    else if(weight < 10)
      output.textContent = "Object is too light";
    else
      output.textContent = "Weight of Object is: " + weight;
  }