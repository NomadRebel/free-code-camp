
/* My First function that is overcomplicated and not the most efficient one
function findLongestWordLength(sentence){
    let count = 0;
    const updateArr = [];
    const trim = sentence.trim();
    console.log(trim);
    if(trim == ' ' || trim==""){
        return 0;
    }
    const newArr = trim.split(" ");
    for(let i = 0; i<newArr.length;i++){
        for (let char in newArr[i]){
        count = char;
        }
        console.log(count);
        updateArr.push(count);

    }
    return(Math.max(...updateArr)+1);
}*/

function findLongestWordLength(sentence){
//!sentence = checks for invalid value if its true than the value is undefined or null or empty string
    if(!sentence || sentence.trim().length===0){    
        return 0;
    }

    const words = sentence.trim().split(" ");
    let maxLength = 0;

    for(let i=0; i<words.length; i++){
        if(words[i].length>maxLength){
            maxLength = words[i].length;
        }
    }
    return maxLength;
}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));