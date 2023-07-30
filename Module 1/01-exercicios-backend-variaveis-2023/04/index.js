let capital = 1_000, interestRate = 12.5, time = 5;

let compoundInterest = capital * ((1 + (interestRate / 100)) ** time)

let trueGain = compoundInterest - capital

console.log(
    `You will receive the total of R$${compoundInterest}\nYou earned R$${trueGain}`
);