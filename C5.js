/*****************************
* CODING CHALLENGE 5
*/

/*
Remember the tip calculator challenge? Let's create a more advanced version using everything we learned!

This time, John and his family went to 5 different restaurants. The bills were $124, $48, $268, $180 and $42.
John likes to tip 20% of the bill when the bill is less than $50, 15% when the bill is between $50 and $200, and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1. Create an object with an array for the bill values
2. Add a method to calculate the tip
3. This method should include a loop to iterate over all the paid bills and do the tip calculations
4. As an output, create 1) a new array containing all tips, and 2) an array containing final paid amounts (bill + tip). HINT: Start with two empty arrays [] as properties and then fill them up in the loop.


EXTRA AFTER FINISHING: Mark's family also went on a holiday, going to 4 different restaurants. The bills were $77, $375, $110, and $45.
Mark likes to tip 20% of the bill when the bill is less than $100, 10% when the bill is between $100 and $300, and 25% if the bill is more than $300 (different than John).

5. Implement the same functionality as before, this time using Mark's tipping rules
6. Create a function (not a method) to calculate the average of a given array of tips. HINT: Loop over the array, and in each iteration store the current sum in a variable (starting from 0). After you have the sum of the array, divide it by the number of elements in it (that's how you calculate the average)
7. Calculate the average tip for each family
8. Log to the console which family paid the highest tips on average

GOOD LUCK
*/

var johnBills = {
    base: [124, 48, 268, 180, 42],
    tips: [],
    totals: [],
    calcTip: function () {
        for (var i = 0; i < this.base.length; i++) {
            switch (true) {
                case this.base[i] < 50:
                    this.tips.push(this.base[i] * 0.2);
                    break;
                case this.base[i] >= 50 && this.base[i] <=200:
                    this.tips.push(this.base[i] * 0.15);
                    break;
                case this.base[i] > 200:
                    this.tips.push(this.base[i] * 0.1);
                    break;
            }

        }
    },
    calcTotals: function () {
        for (var i = 0; i < this.base.length; i++) {
            this.totals.push(this.base[i] + this.tips[i]);
        }
    }
}

johnBills.calcTip();
johnBills.calcTotals();

console.log('John\nBase ' + johnBills.base + '\nTips ' + johnBills.tips + '\nTotals ' + johnBills.totals);

var markBills = {
    base: [77, 375, 110, 45],
    tips: [],
    totals: [],
    calcTip: function () {
        for (var i = 0; i < this.base.length; i++) {
            switch (true) {
                case this.base[i] < 100:
                    this.tips.push(this.base[i] * 0.2);
                    break;
                case this.base[i] >= 100 && this.base[i] <= 300:
                    this.tips.push(this.base[i] * 0.10);
                    break;
                case this.base[i] > 300:
                    this.tips.push(this.base[i] * 0.25);
                    break;
            }

        }
    },
    calcTotals: function () {
        for (var i = 0; i < this.base.length; i++) {
            this.totals.push(this.base[i] + this.tips[i]);
        }
    }
}

markBills.calcTip();
markBills.calcTotals();

console.log('Mark\nBase ' + markBills.base + '\nTips ' + markBills.tips + '\nTotals ' + markBills.totals);

function findHighestAverage(array1, array2) {
    var average1 = 0;
    var average2 = 0;

    for (var i = 0; i < array1.length; i++) {
        average1 += array1[i];
    }
    average1 = average1 / array1.length;

    for (var i = 0; i < array2.length; i++) {
        average2 += array2[i];
    }
    average2 = average2 / array2.length;

    console.log(average1, average2);
    average1 > average2 ? console.log(array1) : average1 === average2 ? console.log('same'): console.log(array2);

}

findHighestAverage(johnBills.tips, markBills.tips);