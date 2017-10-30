$(document).ready(function ()  {

var ordBank=new Array;
var ordArray=new Array;
var forsokt=new Array;
var jaord;

var spill = document.getElementById("spill")

//alfabetet
/*var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
,'s','t','u','v','w','x','y','z','æ','ø','å'];*/


var inpBokstav = document.getElementById("inpBokstav");
var gjettKnapp = document.getElementById("gjettKnapp");

var feilBokstavTekst = document.getElementById("feilBokstavTekst");
var ordValgTekst = document.getElementById("ordValgTekst");
var lengdeTekst = document.getElementById("lengdeTekst");
var livTekst = document.getElementById("livTekst");
var riktigBokstavTekst = document.getElementById("riktigBokstavTekst");


window.onload = function() {
    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
    ,'s','t','u','v','w','x','y','z','æ','ø','å'];

for (x in alphabet) {
  document.getElementById("knapper").innerHTML += "<button id=" + x + ">" + alphabet[x] + "</button>";

  }



  document.getElementById(x).onclick = function() {
    knapper.style.visibility = 'hidden';

     }
  }



$.getJSON("ordBank.json", function(data) {
  for(i=0; i<data.ordliste.length; i++) {
    ordBank [i]=new Array;
    ordBank [i][0]=data.ordliste [i].ord
  }
  neste();

  })
//kaller på funksjon til Ã¥ finne ordet
    function neste() {
      $('#spill').append('<div id="bokstav"></div>');
        finnord ();
        var n = jaord.length;
        var liv = n;
        ordValgTekst.innerHTML += jaord;
        lengdeTekst.innerHTML += n;
        livTekst.innerHTML += liv;



//ska jo egentlig lag boksa, men vetdafaen
      var bokstaver=jaord.length;
  //    alert(bokstaver)
        for(j=0;j<bokstaver;j++){
          $('#bokstav').append('<div class="tile" id=t'+j+'></div>');


        //    alert(n);
    }
    }



    function finnord() {
    var ordet=Math.floor(Math.random()*ordBank.length);
    jaord=ordBank[ordet][0];
    ordArray=jaord.split("");





/*
    alert(ordet);
    alert(jaord);
    alert(ordArray);
*/
  }

  gjettKnapp.onclick = function(){

    var gjettResultat = false;
    var input = inpBokstav.value

    for(var x = 0;x<ordArray.length;x++){
      if(input == ordArray[x]){
        gjettResultat = true;
        $('#t'+x).append(input);
          }else{
        gjettResultat = false;
      }
    }
    if(gjettResultat == true){
      riktigBokstavTekst.innerHTML += inpBokstav.value;

    }else{
      feilBokstavTekst.innerHTML += inpBokstav.value;
    }
  }


});
