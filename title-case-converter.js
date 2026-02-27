const str = "nikhil verma iS a programmer"


function titleCase(str){
    const lower = str.toLowerCase();
const arr = (lower.split(" "));
console.log(arr);

let arrNew = [];
for(let i = 0; i<arr.length; i++){
    const firstletter = arr[i].split("");
    console.log(firstletter);
    const uppercase = firstletter[0].toUpperCase();
    console.log(uppercase);
    firstletter.splice(0,1,uppercase);
    let joined = (firstletter.join(""));
    console.log(joined);
    arrNew.push(joined);
}
return (arrNew.join(" "));
}
console.log(titleCase(str));