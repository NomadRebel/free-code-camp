function bouncer(arr){
    let newArr = []
    for(let i=0; i<arr.length; i++){
        if(Boolean(arr[i])==true){
            newArr.push(arr[i]);
        }
        // else{
        //     console.log("false");
        // }
    }
    console.log(arr);
    return newArr;
}

console.log(bouncer([0,1,2,3,null,65]));

console.log(Boolean(2));