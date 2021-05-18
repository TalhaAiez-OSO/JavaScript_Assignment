/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  const inputNum = ((input("Enter Number...")).toString()).split('');
  let reverse = inputNum[inputNum.length - 1];
  for(let i = (inputNum.length - 2); i >= 0; i--)
    reverse += inputNum[i];
  
  print("Reverse Number: ", reverse);
}