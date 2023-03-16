function calculateLoan(){

var amount = document.getElementById("loan-amount").value;
var interest_rate = document.getElementById("interest_rate").value;
var months = document.getElementById("month").value;
console.log(amount,interest_rate,months);

var interest = (amount * (interest_rate * 0.01)) / months;
var payment = ((amount / months) + interest).toFixed(2);
document.getElementById("payment").innerHTML = `Monthly payment: ${payment}`






}

calculateLoan()