class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.products = {};
    }

    addProduct(product, quantity) {
        this.products[product.name] = {'price': product.price, 'quantity': quantity};
    }

    removeProduct(product, quantity) {
        if (quantity >= this.products[product.name]['quantity']) {
            delete this.products[product.name];
        } else {
            this.products[product.name]['quantity'] -= quantity;
        }
    }

    getTotalPrice() {
        let totalPrice = 0;
        for (let productName in this.products) {
            totalPrice += this.products[productName]['quantity'] * this.products[productName]['price'];
        }
        return totalPrice;
    }

    checkout() {
        let allProducts = [];
        let totalPrice = this.getTotalPrice();
        for (let productName in this.products) {
            allProducts.push(productName);
        }
        this.products = {};
        return `${allProducts} | ${totalPrice} dollars`;
    }
}

let milk = new Product('milk', 100);
let cake = new Product('cake', 250);
let apples = new Product('apples', 150);

let shoppingCart = new ShoppingCart();
shoppingCart.addProduct(milk, 3);
shoppingCart.addProduct(cake, 1);
shoppingCart.addProduct(apples, 2);

console.log(shoppingCart.getTotalPrice());
shoppingCart.removeProduct(cake, 10);
console.log(shoppingCart.checkout());
console.log(shoppingCart.getTotalPrice());