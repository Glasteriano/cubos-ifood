//renda mensal do aluno, em centavos.
let incomeInCents = 3_000_00;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
let passedMonths = 12;

/*
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos).
Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já 
quitou a dívida.
*/
let totalPaid = 10_000_00;
//_____________________________________________________________________________

const validIncome = incomeInCents >= 2_000_00;
const validMonths = passedMonths <= 60;
const incompletePayment = totalPaid < 18_000_00;
//_____________________________________________________________________________

if (validIncome && validMonths && incompletePayment) {

    const ValueInDebt = incomeInCents * 0.18;
    const centsToReais = ValueInDebt / 100;

    console.log(`You have to pay R$${centsToReais} this month.`);
}
else if (!validIncome) {
    console.log("You have to pay R$0,00 this month.\nYour income per month is lower than the minimun.");
}
else if (!validMonths) {
    console.log("You are not in debt anymore because the passed months are more than 60.");
}
else if (!incompletePayment) {
    console.log("You paid all the debts you owed.")
}
else {
    console.log("You shouldn't have seen this message")
}
