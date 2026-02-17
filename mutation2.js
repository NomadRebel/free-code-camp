const arr = ["hello","neo"];
function mutation(arr){
    let str1 = arr[0].toLowerCase();
    let str2 = arr[1].toLowerCase();
    let check = 0;
    console.log(str1);
    console.log(str2);
    let arr11 = str2.split('');
    for (let i = 0; i<str2.length; i++){
        check = str1.includes(arr11[i]);
        if(check==false){
            break;
        }
        console.log(check);
        }
    return check;
}


console.log(mutation(arr));