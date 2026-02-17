function frankenSplice(arr1, arr2, index){
   
   let arr2Cpy = arr2.slice(); 
   let arr1Cpy = arr1.slice();
   
   for(let i = 0; i<arr1.length; i++){
   (arr2Cpy.splice(index+i, 0, arr1Cpy[i]));
   
}
 //modifiedArr.push(arr2Cpy);
   console.log(arr1);
   console.log(arr2);
   return arr2Cpy;
}


console.log(frankenSplice([1,2,3,4],[5,6,7],1));
