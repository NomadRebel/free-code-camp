let year = 1900;
function isLeapYear(year){
    return (year%4==0 && year%100!=0||year%400==0)?"it is a leap year"
    : "not a leap year";
}
console.log(isLeapYear(year));