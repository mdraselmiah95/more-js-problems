const phones = [{
        name: 'samsung s10',
        price: 50000,
        camera: 25,
        storage: '32gb'
    },
    {
        name: 'nokia',
        price: 25000,
        camera: 15,
        storage: '8gb'
    },
    {
        name: 'realme',
        price: 14000,
        camera: 16,
        storage: '64gb'
    },
    {
        name: 'oppo',
        price: 300000,
        camera: 36,
        storage: '16gb'
    },
    {
        name: 'vivo',
        price: 20000,
        camera: 64,
        storage: '4gb'
    },
    {
        name: 'walton',
        price: 19000,
        camera: 8,
        storage: '8gb'
    },
]

let cheapest = phones[0];
// compare price only
for (const phone of phones) {
    if (phone.price < cheapest.price)
        cheapest = phone;
}
console.log(cheapest);

const laptops = [{
    name: 'Hp',
    price: 90000,
    processor: 'core i7',
    ram: '16gb',
    memory: '1TB'
}, {
    name: 'Asus',
    price: 80000,
    processor: 'core i7',
    ram: '8gb',
    memory: '1TB'
}, {
    name: 'Lenovo',
    price: 70000,
    processor: 'core i5',
    ram: '8gb',
    memory: '1TB'
}, {
    name: 'MackBook',
    price: 190000,
    processor: 'M1',
    ram: '16gb',
    memory: '500GB'
}]

// comparing with price
function highestLaptopPrice() {
    let highest = laptops[0];
    for (const laptop of laptops) {
        if (laptop.price > highest.price) {
            highest = laptop;
        }
    }
    return highest;
}
const expensiveLaptop = highestLaptopPrice();
console.log(expensiveLaptop);