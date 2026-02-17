const arr = [[5,3,3,6,4,2],[3,6,1,7,8,9,1]];
function largestOfAll(arr){
    let maximum =[];
    for(let i=0; i<arr.length; i++){
        maximum.push(Math.max(...arr[i]));
    }
    return maximum;
}
console.log(largestNumber(arr));