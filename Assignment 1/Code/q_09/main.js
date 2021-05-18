  const length1 = document.getElementById('length1');
  const width1 = document.getElementById('width1');

  const length2 = document.getElementById('length2');
  const width2 = document.getElementById('width2');

  const output = document.getElementById('output_Q9');
  if(length1.value == "" || width1.value == "" || length2.value == "" || width2.value == "")
    output.textContent = "Invalid Input";
  else{
    const area1 = parseInt(length1.value) * parseInt(width1.value);
    const area2 = parseInt(length2.value) * parseInt(width2.value);
    if(area1 == area2)
      output.textContent = "Triangles are Equal";

    else if(area1 > area2)
      output.textContent = "Triangel 1 has Greater Area";
    
    else 
      output.textContent = "Triangle 2 has Greater Area";
  }