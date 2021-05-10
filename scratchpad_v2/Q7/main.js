/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  const inputNum = input("Enter Number...");
  const arrayNum = (inputNum.toString()).split('');
  let product = 0;
  let num;
  for(let i = 0; i < arrayNum.length; i++){
    num = parseInt(arrayNum[i])
    product += num * num * num;
  }

  if(product === inputNum){
    print(inputNum);
    print(" It is Armstrong Number");
  }
  else{
    print(inputNum);
    print(" It is not Armstrong Number");
  }
}