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
        this.maxPrice = function () {
            var maxPrice = this.list[0].price;
            for(var i = 0; i < this.list.length; i++){
                var product = this.list[i];
            }
            if(product.price > maxPrice){
                maxPrice = product.price;
            }
            return maxPrice;
        }
        this.totalPrice = function () {
            var totalPrice = 0;
            for (var i = 0; i < this.list.length; i++) {
                var product = this.list[i];
                var totalPrice = totalPrice + product.price;
            }
            return totalPrice;
        }
    }

    var coffeeExpirationDate = new Date(2018, 7, 13);
    var coffee = new Product("Grand kafa", 102.45, coffeeExpirationDate);
    var milkExpirationDate = new Date(2018, 9, 13);
    var milk = new Product("Milk", 95, new Date(2018, 8, 15));
    var chocolateExpirationDate = new Date(2018, 11, 13);
    var chocolate = new Product("Najlepse zelje", 205.75, chocolateExpirationDate);

    var myBag = new ShoppingBag();
    myBag.addProduct(coffee);
    myBag.addProduct(milk);
    myBag.addProduct(chocolate);
    console.log(myBag.list);
    console.log("The average price is " + myBag.averagePrice());
    console.log("The highest price is " + myBag.maxPrice());
    console.log("The total price is " + myBag.totalPrice());
})();