$(document).ready(function ()  {

var ordBank=new Array;
var ordArray=new Array;
var forsokt=new Array;
var ord;
var input;
var liv = 5;
var feilBokstavTekst = document.getElementById("feilBokstavTekst");
var ordValgTekst = document.getElementById("ordValgTekst");
var livigjen = document.getElementById("livTekst")





    var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
    ,'s','t','u','v','w','x','y','z','æ','ø','å'];





$.getJSON("ordBank.json", function(data) {
  for(i=0; i<data.ordliste.length; i++) {
    ordBank [i]=new Array;
    ordBank [i][0]=data.ordliste [i].ord
  }
  for(i=0;i<alphabet.length;i++){
      $('#knapper').append('<button id="'+alphabet[i]+'" >'+alphabet[i]+'</button>');

      }



    /*  document.getElementById(x).onclick = function() {
        knapper.style.visibility = 'hidden';

      }*/


  neste();

  })






//kaller på funksjon til Ã¥ finne ordet
    function neste() {
      $('#spill').append('<div id="bokstav"></div>');
        finnord ();
        var n = ord.length;
        ordValgTekst.innerHTML += ord;




//ska jo egentlig lag boksa, men vetdafaen
      var bokstaver=ord.length;
              for(j=0;j<bokstaver;j++){
          $('#bokstav').append('<div class="tile" id=t'+j+'></div>');


        //    alert(n);
    }
    }



    function finnord() {
    var ordet=Math.floor(Math.random()*ordBank.length);
    ord=ordBank[ordet][0];
    ordArray=ord.split("");





/*
    alert(ordet);
    alert(ord);
    alert(ordArray);
*/
  }


//onclick funksjon for alfabetet
  $(document.body).on('click', 'button', function() {
    //disable knappen som blir trykket
    $(this).attr('disabled', 'disabled');


    var gjettResultat = false;
    input = this.id;

      //  var input = inpBokstav.value

    for(var x = 0;x<ordArray.length;x++){
      if(input == ordArray[x]){
        $('#t'+x).append(input);
        gjettResultat = true;
          }
}
    if(gjettResultat){sjekkSvar();}
    else{feil();}


  })
  //funksjon som sjekker om hele svaret er skrevet inn hvis en bokstav som er i ordet blir trykket.
function sjekkSvar() {
  var svar = "";
  for (var i = 0; i < ord.length; i++) {
    svar+=($('#t'+i).text());
  }

  if(svar==ord){
    alert("DU VANT!")};
  }
//funksjon som skal redusere liv når en bokstav som ikke er i ordet blir trykket
function feil() {
  feilBokstavTekst.innerHTML += input;
  liv-=1
  livigjen=liv
  if (liv<1) {
    $("#spill").empty();
    $('#spill').append('<div id="spillover">GAMEOVER!</div>');
    $('#spill').append('<button id="reset" onClick="location.href=location.href">Restart</button>');
}
}
/*
function Restart() {
  document.getElementById("reset").onclick = function(){
    bokstaver.parentNode.removeChild(bokstav)

}
}
/*function livcheck() {
  liv-=1
  if (liv<1) {
    $('#spill').append('<div id="spillover">GAMEOVER!</div>');
  }*/




});
