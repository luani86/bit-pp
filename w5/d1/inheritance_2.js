function WebApp(name, url, technologies, licence, stars) {
    this.name = name;
    this.url = url;
    this.technologies = technologies;
    this.licence = licence;
    this.stars = stars;
}

var w1 = new WebApp("luani", "www.luani.com", "react", "no", 5);
var w2 = new WebApp("Miki Maus", "www.mmaus.com", "angular", "CC", 451);
//console.log(w1);
function MobileApp(name, platforms, licence, stars) {
    this.name = name;
    this.platforms = platforms;
    this.licence = licence;
    this.stars = stars;
}
var m1 = new MobileApp("milutin", "android", "CC", 2);
var m2 = new MobileApp("loonyLuka", "iOS", "NOT CC", 0.1);
//console.log(m1);

WebApp.prototype.getData = function () {
    console.log(this.name + " " + this.url + " " + this.technologies + " " + this.licence + " " + this.stars);
}
//w1.getData();

WebApp.prototype.reactBased = function () {
    if (this.technologies == "react") {
        console.log("This web app is react based.");
    }
    else (console.log("This web app is not react based."));
}
// w1.reactBased();

MobileApp.prototype.getData = function () {
    console.log(this.name + " " + this.platforms + " " + this.licence + " " + this.stars);
}
//m1.getData();


MobileApp.prototype.forAndroid = function () {
    if (this.platforms == "android") {
        console.log("This mobile app is android based.");
    }
    else (console.log("This mobile app is not android based."));
}
// m1.forAndroid();


var sharedMethods = {
    isCCLicence: function () {
        if (this.licence == "CC") {
            console.log("Licence is CC.");
        }
        else {
            console.log("Licence is not CC.");
        }
    },

    like: function () {
        this.stars++
        console.log(this.stars);
    },

    showStars: function () {
        console.log(this.stars);
    }
}

WebApp.prototype.__proto__ = sharedMethods;
MobileApp.prototype.__proto__ = sharedMethods;

w1.getData();
w1.isCCLicence();
w1.like();
w1.showStars();
w2.getData();
w2.isCCLicence();
w2.like()
w2.showStars();

m1.getData();
m1.isCCLicence();
m1.showStars();
m1.like();
m2.getData();
m2.isCCLicence();
m2.showStars();
m2.like();

