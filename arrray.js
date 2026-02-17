const lunches=["Greens", "Corns", "Beans"];
function addLunchToEnd(arr){
    let length= arr.length;
 let random = Math.floor(length * Math.random());
 console.log(random);
 let lunch = random;
 return `Randomly selected lunch ${arr[lunch]}`;
}
function showLunchMenu(arr){
  let length = arr.length;
  if(length!=0){
    let join = arr.join(", ");
    d
    console.log(`"Menu items: ${join}"`);
    return "hi1";
}
  else{
    return "bye";
  }
}
console.log(showLunchMenu(lunches));