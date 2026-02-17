const num = 5;
function factorial(num){
    let result = 1;
      
    for (let i = 0; i<=num; i++){
      result *=i;
    }
    return result;
}
console.log(factorial(num));