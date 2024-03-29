function calculateBill() {
    var units = parseFloat(document.getElementById("units").value);
    var bill = 0;

    if (units <= 50) {
        bill = units * 0.50;
    } else if (units <= 150) {
        bill = (50 * 0.50) + ((units - 50) * 0.75);
    } else if (units <= 250) {
        bill = (50 * 0.50) + (100 * 0.75) + ((units - 150) * 1.20);
    } else {
        bill = (50 * 0.50) + (100 * 0.75) + (100 * 1.20) + ((units - 250) * 1.50);
    }

    // Adding surcharge of 20%
    var surcharge = bill * 0.20;
    bill += surcharge;
    console.log ("Total Electricity Bill: Taka- " + bill);
    document.getElementById("Bill").innerHTML = "Total Electricity Bill: Taka- " + bill;
}