function pyramid(str, rows, bool){
    let pyr = "";
    for(let i = 0; i<=rows; i++){
        let space = i;
        for(let j =i; j<=2*rows-i-1; j++){
            if(space) {
                console.log(" ");
                space--;
            }
            else{
                console.log(str+" ");
            }
        }
        
        
    }
}
console.log(pyramid("o",4));