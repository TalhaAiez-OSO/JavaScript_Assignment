/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  let inputNum;
  do{
    inputNum = input("Enter Number...");
  }while(inputNum < 10);

  inputNum = (inputNum.toString()).split('');
  if(inputNum[0] === inputNum[inputNum.length - 1])
    print("First and Last numbers are Equal");
  else
    print("First and Last numbers are Not Equal");
}