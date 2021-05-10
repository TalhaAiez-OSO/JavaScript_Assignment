/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  const num1 = input("Enter Number 1");
  const count = (num1.toString()).split('');
  print("Number of Digits: ", count.length);
}