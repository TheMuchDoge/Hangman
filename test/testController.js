$(document).ready(function ()  {

var ordBank=new Array;
var ordArray=new Array;
var jaord;


$.getJSON("ordBank.json", function(data) {
  for(i=0; i<data.ordliste.length; i++) {
    ordBank [i]=new Array;
    ordBank [i] [0] = data.ordliste [i].ord
  }
  function neste() {
      finnord ();
      var n = jaord.length;
      alert(n);
    }

    function finnord() {
    var ordet=Math.floor(Math.random()*ordBank.length);
    jaord=ordBank[ordet][0];
    wordArray=jaord.split("");


    alert(ordet);
    alert(jaord);
    alert(wordArray)
  }




});
