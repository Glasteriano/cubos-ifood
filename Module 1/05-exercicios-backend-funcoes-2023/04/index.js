const bankAccount = {
       name : "Maria",
    balance : 0,
    history : [],
    //=====================================================

    moneyLayout : function(value){
        const formatValue = (value / 100).toFixed(2);
        const moneyLayout = `${formatValue}`.replace(".", ",");

        return moneyLayout;
    },
    //=====================================================

    deposit : function(value){
        this.balance += (value / 100);
        this.history.push(
            {
                operation : "Deposit",
                   amount : value
            }
        );

        return `Deposit of R$${this.moneyLayout(value)} done for client: ${this.name}`;
    },
    //=====================================================

    withdrawal : function(value){
        // converting to cents to check the sentence
        const isAllowed = value <= (this.balance * 100);

        if (!isAllowed){
            return `Not enought balance to withdrawal for: ${this.name}`
        };

        this.balance -= (value / 100);
        this.history.push(
            {
                operation : "Withdrawal",
                   amount : value 
            }
        );

        return `Withdrawal of R$${this.moneyLayout(value)} done for client: ${this.name}`;
    },
    //=====================================================

    extract : function(){
        // converting from Cents to Reais to be easier for the moneyLayout function works properly
        const reaisToCents = this.balance * 100;
        console.log(`\nExtract of ${this.name} - Balance: R$${this.moneyLayout(reaisToCents)}\nHistory:`);

        for (let balance of this.history){
            console.log(`\t- ${balance.operation} of R$${this.moneyLayout(balance.amount)}`);
        };
    }
};
//__________________________________________________________________________________

console.log(bankAccount.deposit(10000));
// console.log(bankAccount.history);
console.log(bankAccount.withdrawal(50000));
console.log(bankAccount.withdrawal(5000));
// console.log(bankAccount.history);
bankAccount.extract();


