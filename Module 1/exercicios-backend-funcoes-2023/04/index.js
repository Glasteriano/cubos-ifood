const bankAccount = {
       name : "Maria",
    balance : 0,
    history : [],
    //=====================================================

    deposit : function(value){
        this.balance += (value / 100);
        this.history.push(
            {
                operation : "Deposit",
                   amount : value
            }
        );

        const formatValue = (value / 100).toFixed(2);
        const moneyLayout = `${formatValue}`.replace(".", ",");

        return `Deposit of R$${moneyLayout} done for client: ${this.name}`;
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

        const formatValue = (value / 100).toFixed(2);
        const moneyLayout = `${formatValue}`.replace(".", ",");

        return `Withdrawal of R$${moneyLayout} done for client: ${this.name}`;
    },
    //=====================================================

    extract : function(){
        console.log(`\nExtracto of ${this.name} - Balance: R$${this.balance}\nHistory:`);

        for (let balance of this.history){
            const formatValue = (balance.amount / 100).toFixed(2);
            const moneyLayout = `${formatValue}`.replace(".", ",");
    
            console.log(`\t- ${balance.operation} of R$${moneyLayout}`);
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


