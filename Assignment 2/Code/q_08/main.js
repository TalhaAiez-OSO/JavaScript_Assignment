/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  const inputNum = ((input("Enter Number...")).toString()).split('');
  let halfIndex = Math.floor(inputNum.length);
  
  const isPalindrom = (halfIndex, inputNum, length) => {
    for(let i = 0; i < halfIndex; i++){
      if(inputNum[i] != inputNum[length - i])
        return false;
    }
    return true;
  }

  print("Palindrom: ", isPalindrom(halfIndex, inputNum, inputNum.length - 1));
}