'use strict';

const basketOfPears = {
    maxNumberOfPears: 10,
    minNumberOfPears: 1,
    actualNumberOfPears: 7,
    initialNumberOfPears: 2,

    addOnePear: function () {
        return (this.actualNumberOfPears = this.actualNumberOfPears + 1);
    },
    removeOnePear: function () {
        return (this.actualNumberOfPears = this.actualNumberOfPears - 1)
    },

    initialPears: function () {
        return (this.actualNumberOfPears = this.initialNumberOfPears);
    }
};


console.log(basketOfPears.addOnePear());
console.log(basketOfPears.removeOnePear());
console.log(basketOfPears.removeOnePear());