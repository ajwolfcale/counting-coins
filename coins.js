
let input = document.getElementById("input");
let button = document.getElementById("button");
let output = document.getElementById("output");

button.addEventListener("click", coinCounter);

function coinCounter () {
    var coinPurse = {}; 
    var inputFix = input.value * 100;
    coinPurse.quarters = Math.floor(inputFix / 25);
    coinPurse.dimes = Math.floor((inputFix % 25) / 10);
    coinPurse.nickels = Math.floor(((inputFix % 25) % 10) / 5);
    coinPurse.pennies = Math.floor((((inputFix % 25) % 10) % 5) / 1);
    console.log(coinPurse);
  }
  
 