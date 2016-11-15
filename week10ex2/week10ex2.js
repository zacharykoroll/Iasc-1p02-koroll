var myPrompt = prompt("year born");
console.log(myPrompt);

var theDate = new Date();
var year = theDate.getFullYear();
console.log(year);




var total = year - myPrompt;
console.log(total);
document.getElementById("year").innerHTML = total;
