  const units = document.getElementById('unitsPurchased');
  const output = document.getElementById('output_Q14');
  const RETAIL_PRICE = 99;
  let discount;

  if(units == "")
    output.textContent = "Invalid Input";
  else{
    if(units.value >= 10 && units.value < 20)
      discount = 0.2;
    else if(units.value >= 20 && units.value < 50)
      discount = 0.3;
    else if(units.value >= 50 && units.value < 100)
      discount = 0.4;
    else if(units.value >= 100)
      discount = 0.5;
    else
      discount = 0;
    
    let totalPrice = RETAIL_PRICE * parseInt(units.value);
    output.textContent = "Total Price: " + (totalPrice - (totalPrice * discount)) + "$"; 
  }