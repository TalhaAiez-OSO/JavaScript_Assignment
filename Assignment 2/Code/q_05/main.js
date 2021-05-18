/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  const inputNum = ((input("Enter Number...")).toString()).split('');
  let halfIndex = Math.floor(inputNum.length/2);
  let sum = 0;
  for(let i = 0; i < halfIndex; i++){
    sum += parseInt(inputNum[i]);
  }
  
  print("Half Sum: ", sum);
}