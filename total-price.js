const products = [{
        name: 'Laptop',
        price: 50000,
    },
    {
        name: 'Shirt',
        price: 500,
    },
    {
        name: 'Watch',
        price: 3500,
    },
    {
        name: 'Phone',
        price: 19000,
    }
]
let totalPrice = 0;

for (const product of products) {
    totalPrice = totalPrice + product.price;
}
// console.log(totalPrice);

const cart = [{
        name: 'Laptop',
        price: 50000,
        quantity: 1,
    },
    {
        name: 'Shirt',
        price: 500,
        quantity: 8,
    },
    {
        name: 'Watch',
        price: 3500,
        quantity: 3,
    },
    {
        name: 'Phone',
        price: 19000,
        quantity: 2,
    }
]

let cartTotal = 0;
for (const product of cart) {
    const productTotal = product.price * product.quantity;
    cartTotal = cartTotal + productTotal;
}
console.log(cartTotal);