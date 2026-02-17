function confirmEnding(str, end){
    let length= end.length;
    console.log(length);
    let check = str.slice(-length);
    console.log(check);
    if(end==check){
        return true;
    }
    else{
        return false;
    }
}
console.log(confirmEnding("nikhil", "hil"));