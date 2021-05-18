  const radius = document.getElementById('radius_Q16');
  const length = document.getElementById('length_Q16');
  const width = document.getElementById('width_Q16');
  const base_Length = document.getElementById('base_length_Q16');
  const height = document.getElementById('height_Q16');

  const PIE = 3.1415;

  const area_of_circle_output = document.getElementById('output1_Q16');
  const area_of_rectangle_output = document.getElementById('output2_Q16');
  const area_of_triangle_output = document.getElementById('output3_Q16');

  if(radius.value != ""){
    area_of_circle_output.textContent = "Area of Circle is: " + PIE * (parseFloat(radius.value) * parseFloat(radius.value));
  }
  if(length.value != "" && width.value != ""){
    area_of_rectangle_output.textContent = "Area of Rectangle is: " + parseFloat(length.value) * parseFloat(width.value);
  }
  if(base_Length.value != "" && height.value != ""){
    area_of_triangle_output.textContent = "Area of Triangle is: " + (parseFloat(height.value) * parseFloat(base_Length.value)) / 2;
  }