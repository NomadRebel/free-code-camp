// ===OlD FUNCTION========

// function convertHTML(str){
//     const arr = str.split("");
//     console.log(arr);
//     for(let i=0; i<str.length; i++){
//         if(arr[i] == "&"){
//             arr.splice(i, 1, "&amp;");
//         }
//         else if(arr[i] == "<"){
//             arr.splice(i, 1, "&lt;");
//         }
//         else if(arr[i] == ">"){
//             arr.splice(i, 1, "&gt;");
//         }
//         else if(arr[i] == '"'){
//             arr.splice(i, 1, "&quot;");
//         }
//         else if(arr[i] == "'"){
//             arr.splice(i, 1, "&apos;");
//         }
//     }
//     const newStr = arr.join('');
//     return newStr;
// }


// ===UPDATED FUNCTION======

function convertHTML(str){
    return str 
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&apos;");
}

console.log(convertHTML('Stuff in "quotation marks"'));