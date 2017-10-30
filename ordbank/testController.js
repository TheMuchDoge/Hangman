$(document).ready(function ()  {

var ordBank=new Array;
var ordArray=new Array;
var forsokt=new Array;
var ord;

var spill = document.getElementById("spill")


var inpBokstav = document.getElementById("inpBokstav");
var gjettKnapp = document.getElementById("gjettKnapp");

var feilBokstavTekst = document.getElementById("feilBokstavTekst");
var ordValgTekst = document.getElementById("ordValgTekst");
var lengdeTekst = document.getElementById("lengdeTekst");
var livTekst = document.getElementById("livTekst");
var riktigBokstavTekst = document.getElementById("riktigBokstavTekst");
//alfabetet i array
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
    ,'s','t','u','v','w','x','y','z','æ','ø','å'];

$.getJSON("ordBank.json", function(data) {
  for(i=0; i<data.ordliste.length; i++) {
    ordBank [i]=new Array;
    ordBank [i][0]=data.ordliste [i].ord
  }
  for (z in alphabet) {
    document.getElementById("knapper").innerHTML += "<button id=" + z + ">" + alphabet[z] + "</button>";
    }
document.getElementById(z).onclick = function() {
      knapper.style.visibility = 'hidden';
    }

  neste();

  })
//kaller pÃ¥ funksjon til Ã¥ finne ordet
    function neste() {
      $('#spill').append('<div id="bokstav"></div>');
        finnord ();
        var n = ord.length;
        var liv = n;
        //disse er bare for testing purposes
        ordValgTekst.innerHTML += ord;
        lengdeTekst.innerHTML += n;
        livTekst.innerHTML += liv;



//slager tiles for riktige bokstaver kalt t0,t1 osv
      var bokstaver=ord.length;
        for(j=0;j<bokstaver;j++){
          $('#bokstav').append('<div class="tile" id=t'+j+'></div>');


    }
    }

//velger ett ord fra ordbank array, samt deler det opp og setter d i en array

    function finnord() {
    var ordet=Math.floor(Math.random()*ordBank.length);
    ord=ordBank[ordet][0];
    ordArray=ord.split("");
/* bare for å sjekke om koden er rett og den henter ut ett ord
    alert(ordet);
    alert(ord);
    alert(ordArray);
*/
  }

  gjettKnapp.onclick = function(){

    var gjettResultat = false;
    var input = inpBokstav.value;

    for(var x = 0;x<ordArray.length;x++){
      if(input == ordArray[x]){
        gjettResultat = true;
        //skriver til tile
        $('#t'+x).append(input);
          }else{
        gjettResultat = false;
      }
    }
    if(gjettResultat == true){
      //hvis bokstaven er i ordet, kjører funksjonen for å sjekke om hele ordet er riktig
      sjekkSvar();

    }else{
      feilBokstavTekst.innerHTML += inpBokstav.value;
    }
  }
//sjekker om svaret er riktig
  function sjekkSvar() {
    var svar = ""
    for(i=0;i<ord.length;i++){
      svar+=($('#t'+i).text());
  }
  if (svar==ord) {
    alert("RIKTIG!!");

  }
}

});
