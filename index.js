//1
function absoluteValue(num){
  if(Number.isInteger(num) === false){
      console.log("Not a number m8");
  } else if( num >= 0){
      console.log(num);
  } else if(num < 0) {
      console.log(num * -1);
  } 
  
}
absoluteValue(-8);


