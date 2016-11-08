function firstFunction(aNumber){
  document.write(aNumber)
};
//var two= 2;
//var add= two + two;
//var subtract= two - two;
//var multiply= two * two;
//var divide= two / two;


document.write("<p> i love monkeys</p>");
document.getElementById("para").innerHTML="Something else";
document.getElementById("para").style.color= "blue";
document.getElementById("para").style.fontSize= "60px";


function firstFunction() {
  document.getElementById("one").style.fontSize= "60px";

  document.getElementById("two").style.color= "blue";
  document.getElementById("two").style.textAlign= "center";

  document.getElementById("three").style.textTransform= "uppercase";
  document.getElementById("three").style.color= "orange";
}

firstFunction(10);

function add1( num1, num2){
  var total= num1 +num2;
  document.getElementById("answers").innerHTML = total;

}
function subtract1(num1, num2 ){
  var total= num1 - num2;
  document.getElementById("answers").innerHTML = total;
}

function divide1(num1, num2){
  var total= num1 / num2;
  document.getElementById("answers").innerHTML = total;
}
function multiply1(num1, num2){
  var total= num1 *num2;
  document.getElementById("answers").innerHTML = total;
}
