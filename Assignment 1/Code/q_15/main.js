  const checks = document.getElementById('checks');
  const output = document.getElementById('output_Q15');
  const FEE_PER_MONTH = 10;
  let additionalFees;
  if(checks.value == "" || checks.value < 0)
    output.textContent = "Invalid Input";
  else{
    if(checks.value < 20)
      additionalFees = 0.10;
    else if(checks.value >= 20 && checks.value <= 39)
      additionalFees = 0.80;
    else if(checks.value >= 40 && checks.value <= 59)
      additionalFees = 0.06;
    else if(checks.value >= 60)
      additionalFees = 0.04;

    output.textContent = "Total Fee: " + ((parseInt(checks.value) * additionalFees) + FEE_PER_MONTH) + "$";
  }