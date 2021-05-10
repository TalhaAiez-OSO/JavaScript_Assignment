/**
 *  execution of code wil start from this function
 * 
*/
export default main;
function main() {
  const inputNum = input("Enter Number 1");
  const array = (inputNum.toString()).split('');
  let count = array.length;
  let halfCount;

  if(count%2 === 0){
    halfCount = (count / 2) - 1;
    if((parseInt(array[halfCount]) + parseInt(array[halfCount + 1])) % 2 === 0){
      print("Mid is Even");
    }
    else{
      print("Mid is Odd");
    }
  }
  else{
    halfCount = Math.floor(count / 2);
    if(parseInt(array[halfCount]) % 2 === 0){
      print("Mid is Even");
    }
    else{
      print("Mid is Odd");
    }
  }
}