/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  const inputNum = ((input("Enter Number...")).toString()).split('');
  let product = 1;
  for(let i = 0; i <= inputNum.length - 1; i++){
    product *= parseInt(inputNum[i]);
  }
  
  print("Digit Product: ", product);
}