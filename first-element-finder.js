function findElement(arr,func){
    let result;
    for(let i=0; i<arr.length; i++){
        if(func(arr[i])==true){
            result = arr[i];
            break;
        }
    }
    return result;
}
console.log(findElement([1,2,5,7,8], function(num){return num%2===0;}));