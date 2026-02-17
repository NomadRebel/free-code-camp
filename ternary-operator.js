const minIncomeForDuplex = 60000;
const minCreditScoreForDuplex = 700;

const minIncomeForCondo = 45000;
const minCreditScoreForCondo = 680;

const minIncomeForCar = 30000;
const minCreditScoreForCar = 650;

function getLoanMessage(annualIncome, creditScore) {
  return annualIncome>=minIncomeForDuplex && creditScore>=minCreditScoreForDuplex ? "You qualify for a duplex, condo and car loan."
  : annualIncome>=minIncomeForCondo && creditScore>=minCreditScoreForCondo ? "You qualify for condo and car loan."
  : annualIncome>=minIncomeForCar && creditScore>=minCreditScoreForCar ? "You qualify for a car loan."
  : "You don't qualify for any loans";
}

const duplexLoanMsg = getLoanMessage(85000, 850);
const condoLoanMsg = getLoanMessage(65000, 690);
const carLoanMsg = getLoanMessage(45000, 660);
const noLoanMsg = getLoanMessage(25000, 550);

console.log(duplexLoanMsg);
console.log(condoLoanMsg);
console.log(carLoanMsg);
console.log(noLoanMsg);