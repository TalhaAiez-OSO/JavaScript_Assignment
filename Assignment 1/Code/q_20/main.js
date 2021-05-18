  const hour = document.getElementById('timeHour');
  const min = document.getElementById('timeMin');
  const talk_minutes = document.getElementById('TalkMinutes');
  const FeeOutput = document.getElementById('output1_Q20');
  const TimeOutput = document.getElementById('output2_Q20');

  if(hour.value == "" || min.value == "" || talk_minutes.value == "" )
    output.textContent = "Invalid Input";
  else{
    if(hour.value >= 0 && hour.value <= 23 && min.value >= 0 && min.value <= 59){
      if(hour.value >= 0 && hour.value <= 6 && min.value >= 0 && min.value <= 59){
        FeeOutput.textContent = "Total Cost: $" + 0.12 * parseFloat(talk_minutes.value);
        TimeOutput.textContent = "Call Started at " + hour.value + ":" + min.value + " for " + talk_minutes.value + " minutes";
      }
      else if(hour.value >= 7 && hour.value <= 19 && min.value >= 0 && min.value <= 0){
        FeeOutput.textContent = "Total Cost: $" + 0.55 * parseFloat(talk_minutes.value);
        TimeOutput.textContent = "Call Started at " + hour.value + ":" + min.value + " for " + talk_minutes.value + " minutes";
      }
      else if(hour.value >= 19 && hour.value <= 23 && min.value >= 1 && min.value <= 59){
        FeeOutput.textContent = "Total Cost: $" + 0.55 * parseFloat(talk_minutes.value);
        TimeOutput.textContent = "Call Started at " + hour.value + ":" + min.value + " for " + talk_minutes.value + " minutes";
      }
    }
    else
      output.textContent = "Invalid Input";
  }