function uniteUnique(...args){
    const result = [];
    for(const arg of args){
        for(let i=0; i<arg.length;i++){
            if(result.includes(arg[i])){
                continue;
            }
            else{
                result.push(arg[i]);
            }
        }
    }
    return result;
    
}

console.log(uniteUnique([1,3,2],[5,2,1,4],[2,1]));
console.log(typeof([1,2,3,4,4]))