  const wavelength = document.getElementById('wavelength');
  const output = document.getElementById('output_Q18');

  if(wavelength.value != ""){
    if(wavelength.value <= (1e-11))
      output.textContent = "Gamma Rays";
    else if(wavelength.value <= (1e-8) && wavelength.value > (1e-11))
      output.textContent = "X Rays";
    else if(wavelength.value <= (4e-7) && wavelength.value > (1e-8))
      output.textContent = "Ultraviolet";
    else if(wavelength.value <= (7e-7) && wavelength.value > (4e-7))
      output.textContent = "Visible Light";
    else if(wavelength.value <= (1e-3) && wavelength.value > (7e-7))
      output.textContent = "Infrared";
    else if(wavelength.value <= (1e-2) && wavelength.value > (1e-3))
      output.textContent = "Microwave";
    else if(wavelength.value >= (1e-2))
      output.textContent = "Radio Waves"
  }