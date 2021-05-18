  const input = document.getElementById('num_Q8');
  const output = document.getElementById('output_Q8');

  if(input.value == "" || (input.value <= 0 && input.value > 10))
    output.textContent = "Invalid Input";
  else{
    switch(input.value){
      case "1":
        output.textContent = "I";
        break;
      case "2":
        output.textContent = "II";
        break;
      case "3":
        output.textContent = "III";
        break;
      case "4":
        output.textContent = "IV";
        break;
      case "5":
        output.textContent = "V";
        break;
      case "6":
        output.textContent = "VI";
        break;
      case "7":
        output.textContent = "VII";
        break;
      case "8":
        output.textContent = "VIII";
        break;
      case "9":
        output.textContent = "IX";
        break;
      case "10":
        output.textContent = "X";
        break;
    }
  }