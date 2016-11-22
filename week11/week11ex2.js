function output() {

  var first = new Array();
 first = ["What a happy", "what a big", "what a crazy", "what an adorable", "what a stupid"];

 var second = new Array();
 second = ["puppy", "prof", "mom", "rower", "cat"];
 
 var random =Math.floor( Math.random()*5)
 var random2 =Math.floor( Math.random()*5)

  document.getElementById("ex1").innerHTML= first[random] + " "+ second[random2] +"<br />";
}
