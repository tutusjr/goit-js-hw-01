console.log('---------TASK-2---------')

function getShippingMessage(country, price ,delirveryFee) {
    return `Shipping to ${country} will cost ${price + delirveryFee} credits`
}

console.log(getShippingMessage("Australia", 120, 50));
console.log(getShippingMessage("Germany", 80, 20));
console.log(getShippingMessage("Sweden", 100, 20))