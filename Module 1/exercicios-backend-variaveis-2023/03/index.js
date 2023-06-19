let yourMoney = 80; productPrice = 129.99;

let percentageOfValue = (yourMoney * 100) / productPrice; //gives how much you have of the item

let finalDiscount = 100 - percentageOfValue;

console.log(
    `You need ${finalDiscount}% off to but that item`
);