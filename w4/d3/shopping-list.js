"use strict";

(function () {
    function Product(name, price, expirationDate) {
        this.id = (function () {
            var productId;
            productId = 13234;
            return productId;
        })();
        this.name = name;
        this.price = price;
        this.expirationDate = expirationDate;
        this.getInfo = function () {
            var name = this.name;
            var productCode = name[0].toUpperCase() + name[name.length - 1].toUpperCase() + this.id;
            return productCode + ", " + this.name + ", " + this.price;
        };
    }

    function ShoppingBag() {
        this.list = [];
        this.addProduct = function (product) {
            //proveriti da li je istekao rok trajanja
            this.list.push(product);
        }
        this.averagePrice = function () {
            var sumPrice = 0;
            for (var i = 0; i < this.list.length; i++) {
                var product = this.list[i];
                sumPrice += product.price;
            }
            var averagePrice = sumPrice / this.list.length;
            return averagePrice;
        }
    }

    var coffeeExpirationDate = new Date(2018, 7, 13);
    var coffee = new Product("Grand kafa", 102.45, coffeeExpirationDate);
    var milk = new Product("Milk", 95, new Date(2018, 8, 15));

    var myBag = new ShoppingBag();
    myBag.addProduct(coffee);
    myBag.addProduct(milk);
    console.log(myBag.list);
    console.log("The average price is " + myBag.averagePrice());
})();