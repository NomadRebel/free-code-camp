const arr = ["alien","line"];           //i want to see which one is small and check the small one is present in bigone.
function mutation(arr){
    let check;
    let length;
    let length1= arr[0].length;
    console.log(length1);
    let length2= arr[1].length;
    if(length1<length2){
        length=length1;
    }
    else{
        length=length2;
    }
    console.log(length);
    let str1Length = arr[0].toString().toLowerCase();
    console.log(str1Length);
    let str2Length = arr[1].toString().toLowerCase();
    console.log(str2Length);

    let str1 = str1Length.split("");
    let str2 = str2Length.split("");
    // str1.toLowerCase();
    console.log(str1);
    console.log(str2);
   for (let i = 0; i<length; i++){
    console.log(i);
    check = str1.includes(str2[i]);
    console.log(check);
   }
    
    return check;
}
console.log(mutation(arr));