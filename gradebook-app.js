// this function will take the array of test scores and return the average
function getAverage(arr){
    let average = 0;
    let sum = 0;
    for(let i=0; i<arr.length; i++){
        sum+=arr[i];
        //console.log(average);
    }
    average = sum/arr.length;
    return average;
}

console.log(getAverage([56, 23, 89, 42, 75, 11, 68, 34, 91, 19]))


//takes student score and returns a grade
function getGrade(score){
    if(score==100){
        return "A+";
    }
    else if(score>=90 && score<=99){
        return "A";
    }
    else if(score>=80 && score<=89){
        return "B";
    }
    else if(score>=70 && score<=79){
        return "C";
    }
    else if(score>=60 && score<=69){
        return "D";
    }
    else{
        return "F";
    }
}

console.log(getGrade(59));

//returns true/false depending on the score it will use getGrade() function
function hasPassingGrade(score){
    if(getGrade(score)=="F"){
        return false;
    }
    else{
        return true;
    }
}
console.log(hasPassingGrade(78));

//takes an array of scores and returns a string
function studentMsg(arr,score){
    if(hasPassingGrade(score)==true){
        return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You passed the course.`;
    }
    else{
        return `Class average: ${getAverage(arr)}. Your grade: ${getGrade(score)}. You failed the course.`;
    }
}

console.log(studentMsg([43,55,89,58,73], 79))