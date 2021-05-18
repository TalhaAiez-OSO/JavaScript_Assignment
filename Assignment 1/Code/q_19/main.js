  const CustomerName = document.getElementById('CustomerName');
  const PackageName = document.getElementById('PackageName');
  const hoursUsed = document.getElementById('hoursUsed');

  const customerOutput = document.getElementById('output1_Q19');
  const packageOutput = document.getElementById('output2_Q19');
  const hoursUsedOutput = document.getElementById('output3_Q19');
  const dueAmountOutput = document.getElementById('output4_Q19');

  if(CustomerName.value != "" || PackageName.value != "" || (hoursUsed.value != "" && !(hoursUsed.value > 744))){
    customerOutput.textContent = "Customer Name: " + CustomerName.value;
    if(PackageName.value == "A"){
      packageOutput.textContent = "Package Name: A";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      if(hoursUsed.value <= 10)
        dueAmountOutput.textContent = "Due Amount: " + 9.95;
      else
        dueAmountOutput.textContent = "Due Amount: " + 9.95 * (parseInt(hoursUsed.value) * 2);
    }

    else if(PackageName.value == "B"){
      packageOutput.textContent = "Package Name: B";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      if(hoursUsed.value <= 20)
        dueAmountOutput.textContent = "Due Amount: " + 14.95;
      else
        dueAmountOutput.textContent = "Due Amount: " + 14.95 * (parseInt(hoursUsed.value) * 1);
    }
    else if(PackageName.value == "C"){
      packageOutput.textContent = "Package Name: C";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      dueAmountOutput.textContent = "Due Amount: " + 19.95;
    }
    else{
      packageOutput.textContent = "Package Name: Invalid Input";
      hoursUsedOutput.textContent = "Hours Used: " + hoursUsed.value;
      dueAmountOutput.textContent = "Due Amount: N/A";
    }
  }