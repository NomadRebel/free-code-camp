let count = 0;
function cardCounter(card){
    if(card==2||card==3||card==4||card==5||card==6){
        ++count;
    }
    else if(card==7|| card==8|| card==9){
        count;
    }
    else if(card=="A" || card=="Q" || card=="K"|| card=="J" || card==10){
        --count;
    }
    
    if(count<=0){
        return `${count} Hold`;
    }
    else{
        return `${count} Bet`;
    }
}



console.log(cardCounter(5));

console.log(cardCounter("A"));
console.log(cardCounter(9));
console.log(cardCounter(3));
