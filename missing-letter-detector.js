/* 
### PROBLEM:-
- find the missing letter.

### MY PLAN:-
- Make an array of alphabet.
- find the index of starting and ending letter of the given string.
- run loop on the index numbers on the alphabet array and the given string.
- then return the letter that is missing on the string.
*/



function fearNotLetter(str){
    let missingLetter;
    //array of alphabet
    const alpha = "abcdefghijklmnopqrstuvwxyz";
    const alphaArr = alpha.split("");
    
    //finding the index of the starting and ending point of the string
    const strArr = str.split("");
    const firstIndex = alphaArr.indexOf(strArr[0]);
    console.log(firstIndex);
    const lastIndex = alphaArr.indexOf(strArr[strArr.length-1]);
    console.log(lastIndex);

    // let's try extracting the required array from the alphaArr I don't think it is necessary though
    const reqArr = [];
    for (let i = firstIndex; i <=lastIndex; i++){
        let removedElement = alphaArr[i];
        console.log(removedElement);
        reqArr.push(removedElement);
    }
    console.log(reqArr);
    if(reqArr.length == strArr.length){
        return "nothing is missing";
    }
    else{
        for (let i = 0; i<=strArr.length; i++){
            if(reqArr[i]!==strArr[i]){
                console.log(reqArr[i]);
                missingLetter = reqArr[i];
                break;
            }   
        }
    }
    return missingLetter;
}

console.log(fearNotLetter("bcefg"));

