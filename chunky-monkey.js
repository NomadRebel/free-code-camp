function chunkArrayInGroups(arr,num){
    console.log(arr, num);
    let cpyArr = arr;
    let newArr = [];
    for(let i=0;i<=cpyArr.length;i++){
    let splicedArr = cpyArr.slice(0,num);
    newArr.push(splicedArr);
    console.log(splicedArr);
    }
    if(cpyArr.length<num&&cpyArr.length>0){
        newArr.push(cpyArr);
    }
    console.log(newArr);
    console.log(arr);
}
function chunkArrayInGroups(arr, num) {
  let newArr = [];
  
  // Increment i by 'num' each time to find the start of the next chunk
  for (let i = 0; i < arr.length; i += num) {
    // Slice from the current index to the current index + num
    newArr.push(arr.slice(i, i + num));
  }
  
  return newArr;
}

// Example: chunkArrayInGroups(["a", "b", "c", "d"], 2) 
// returns [["a", "b"], ["c", "d"]]
console.log(chunkArrayInGroups(["a","b","c","d","e","f","g","h"],4));