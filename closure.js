function firstnumber(x){
    let first = x;
    function  innerFunction(y){
        if(x==y){
            return true;
        }
    }
    return innerFunction();
}

console.log(firstnumber(3));
console.log(firstnumber(3));