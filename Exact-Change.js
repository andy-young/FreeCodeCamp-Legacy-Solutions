function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    const constChange = change;

    let tendered = [];

    let unitFreq = []; // the amount of pennies, dimes, etc

    let units = [0.01, 0.05, 0.1, 0.25, 1, 5, 10, 20, 100];

    let till = [...new Map(cid).values()]; // [1.01, 2.05, 3.1, 4.25, 90, 55, 20, 60, 100]

    let totalCash = till.reduce((a, b) => a + b);

    totalCash = Math.round(100 * totalCash) / 100;

    let monies = [...new Map(cid)
        .keys()
    ];

    for (let i = 0; i < units.length; i++) {
        unitFreq.push(till[i] / units[i]);
    }

    // remove units too large to make change
    units = units.filter(n => n < constChange);

    // do the same with unitFreq
    unitFreq = unitFreq.splice(0, units.length);

    // as well as like bills, coins etc...
    till = till.splice(0, units.length);

    // and monies...
    monies = monies.splice(0, units.length);

    var counter = units.length - 1;

    let changeBuilder = () => {
        for (let i = counter; i >= 0; i--) {
            if (change === 0) {
                return tendered;
            }
            let q = Math.floor(change / units[i]);
            let tender;
            if (unitFreq[i] >= q && q >= 1) {
                tender = q * units[i];
                change = Math.round((change - tender) * 100 + Number.EPSILON) / 100;
                counter -= 1;
                tendered.push([monies[i], tender]);
            } else if (q > unitFreq[i]) {
                tender = units[i] * unitFreq[i];
                change -= tender;
                counter -= 1;
                tendered.push([monies[i], tender]);
            } else if (change > 0 && change < units[i]) {
                counter -= 1;
                return changeBuilder();
            }
        }
        return tendered;
    };

	let sufficeQuotient = till.reduce((a,b) => a+b);
    
    if (constChange > totalCash || constChange > sufficeQuotient) {
        return "Insufficient Funds";
    } else if (constChange === totalCash) {
        return "Closed";
    } else return changeBuilder();
}

checkCashRegister(3.26, 100.00, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.10],
    ["QUARTER", 4.25],
    ["ONE", 90.00],
    ["FIVE", 55.00],
    ["TEN", 20.00],
    ["TWENTY", 60.00],
    ["ONE HUNDRED", 100.00]
]);