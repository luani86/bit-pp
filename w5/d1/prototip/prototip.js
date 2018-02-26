function Kuvar(plata, radno_vreme, mesto) {
    this.plata = plata;
    this.radno_vreme = radno_vreme;
    this.mesto = mesto;
}

Kuvar.prototype.getRadno_Vreme = function () {
    console.log(this.radno_vreme);
}

var kuvar_1 = new Kuvar(500, 8, "bgd");
kuvar_1.getRadno_Vreme();


function Konobar(plata, baksis, mesto) {
    this.plata = plata;
    this.baksis = baksis;
    this.mesto = mesto;
}

Konobar.prototype.getBaksis = function () {
    console.log(this.baksis);
}

var konobar_1 = new Konobar(400, 300, "knj");
konobar_1.getBaksis();


console.log(kuvar_1);
console.log(konobar_1);

var sharedMethod = {
    getPlata: function () {
        console.log(this.plata);
    },
    getMesto: function () {
        console.log(this.mesto);
    }
};

Kuvar.prototype.__proto__ = sharedMethod;
Konobar.prototype.__proto__ = sharedMethod;

kuvar_1.getPlata();
konobar_1.getPlata();


