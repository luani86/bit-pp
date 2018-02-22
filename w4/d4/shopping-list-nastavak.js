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
            var productCode = name[0].toUpperCase() + name[name.length - 1].toUpperCase() + this.id;
            return productCode + ", " + this.name + ", " + this.price;
        };
    }

    function ShoppingBag() {
        this.list = [];

        this.addProduct = function (product) {
            //proveriti da li je istekao rok trajanja
            var today = new Date();
            var result;
            if (product.expirationDate >= today) {
                this.list.push(product);
                result = "Product is up to date."
            }
            else {
                result = "Product is out of date."
            }
            return result;
        }

        //console.log(result);

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
            var maxIndex = 0;
            for (var i = 0; i < this.list.length; i++) {
                var product = this.list[i];

                if (product.price > maxPrice) {
                    maxPrice = product.price;
                    maxIndex = i;
                }
            }
            console.log(this.list[maxIndex].getInfo());
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

    function PaymentCard(balance, cardExpirationDate) {
        this.balance = balance;
        this.cardExpirationDate = new Date(cardExpirationDate);

        this.validity = (function () {
            var result;
            if (new Date() < cardExpirationDate) {
                result = "Card is active up to" + cardExpirationDate;
            }
            else {
                result = "Card is inactive";
            }
            return result;
        })();

    }

    function checkoutAndBuy(PaymentCard, myBag) {
        var result;
        if (myBag.totalPrice() > PaymentCard.balance) {
            result = "Insufficient funds."
        } else {
            result = "Your payment is OK."
        }
        return result;
    }


    var coffeeExpirationDate = new Date(2018, 7, 13);
    var coffee = new Product("Grand kafa", 102.45, coffeeExpirationDate);
    var milkExpirationDate = new Date(2014, 9, 13);
    var milk = new Product("Milk", 95, new Date(2014, 8, 15));
    var chocolateExpirationDate = new Date(2018, 11, 13);
    var chocolate = new Product("Najlepse zelje", 205.75, chocolateExpirationDate);

    var card = new PaymentCard(2000, "2022 06 11");

    var myBag = new ShoppingBag();
    myBag.addProduct(coffee);
    myBag.addProduct(milk);
    myBag.addProduct(chocolate);
    console.log("The average price is " + myBag.averagePrice());
    myBag.maxPrice();
    console.log("The total price is " + myBag.totalPrice());

    console.log(checkoutAndBuy(card, myBag));

})();
