let loanedMoney = 60_000; totalToPay = 90_000; months = 24

const interestRate = ((totalToPay / loanedMoney) ** (1 / months)) - 1;

const interestRatePercentage = interestRate * 100

console.log(`Your funding of R$${loanedMoney},00 got a interest rate of ${interestRatePercentage} \
because after ${months} months you had to pay R$${totalToPay},00`)