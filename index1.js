let numberRoll = document.getElementById('button');

var slotnum = ["&#48;", "&#49;", "&#50;","&#51;", "&#52;", "&#53;", "&#54;", "&#55;", "&#56;", "&#57;", "&#9813;"]


numberRoll.addEventListener ('click',function()

{
  var randomNumber1 = slotnum[Math.floor(Math.random() * slotnum.length)];
  document.getElementById("number1").innerHTML = randomNumber1;

})

numberRoll.addEventListener ('click',function()

{
  var randomNumber2 = slotnum[Math.floor(Math.random() * slotnum.length)];
  document.getElementById("number2").innerHTML = randomNumber2;

})

numberRoll.addEventListener ('click',function()

{

  var randomNumber3 = slotnum[Math.floor(Math.random() * slotnum.length)];
  document.getElementById("number3").innerHTML = randomNumber3;

})


numberRoll.addEventListener('click',function()
{
var val1 = document.getElementById("number1").childNodes[0].nodeValue;
var val2 = document.getElementById("number2").childNodes[0].nodeValue;
var val3 = document.getElementById("number3").childNodes[0].nodeValue;
var resu = document.getElementById("resultf").textContent
// var numberResult = [resu, val1, val2, val3]
// document.getElementById("results").textContent = numberResult;

 if (val1==val2 && val2==val3) { document.getElementById("resultf").textContent = "Jackpot";

}  else if (val1==val2||val2==val3||val3==val1) { document.getElementById("resultf").textContent = "Double House";


} else {document.getElementById("resultf").textContent = "Keep Rolling!"; }

}
)
