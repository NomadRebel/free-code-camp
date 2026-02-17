function repearStr(str, num){
    let repeats = [];
    for(let i=0;i<num;i++){
        repeats.push(str);    
    }
    console.log(repeats);
    let arr = repeats.join("");
    return arr;
}

console.log(repearStr("*",3));