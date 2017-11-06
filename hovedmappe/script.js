$(document).ready(function ()  {

var ordBank=new Array;
var ordArray=new Array;
var forsokt=new Array;
//var ord;
var input;
var liv = 7;
var feilBokstavTekst = document.getElementById("feilBokstavTekst");
var ordValgTekst = document.getElementById("ordValgTekst");
var livigjen = document.getElementById("livTekst")

var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
,'s','t','u','v','w','x','y','z','æ','ø','å'];

var ordAlt = ["damer", "spill", "datamaskin"];
var valg = Number(Math.floor((Math.random() * ordAlt.length)));
var ord = ordAlt[valg];

ordArray=ord.split("");

for(i=0;i<alphabet.length;i++){
    $('#knapper').append('<button id="'+alphabet[i]+'" >'+alphabet[i]+'</button>');
  }

neste();

//kaller på funksjon til Ã¥ finne ordet
function neste() {
  $('#spill').append('<div id="bokstav"></div>');
  //  finnord ();
  var n = ord.length;
  ordValgTekst.innerHTML += ord;
  livigjen.innerHTML = liv
  kran();

  //ska jo egentlig lag boksa, men vetdafaen
  var bokstaver=ord.length;

  for(j=0;j<bokstaver;j++){
      $('#bokstav').append('<div class="tile" id=t'+j+'></div>');
    }
  }

//onclick funksjon for alfabetet
  $("#knapper").on('click', 'button', function() {
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
  canvas();
  liv-=1
  livigjen.innerHTML = liv
  if (liv<1) {
    $("#knapper").hide();
    $('#spill').append('<div id="spillover">GAMEOVER!</div>');
    $('#spill').append('<button id="reset" onClick="location.href=location.href">Restart</button>');
    for(var x = 0;x<ordArray.length;x++){
      if(ordArray[x] == ordArray[x]){
        if ($('#t'+x).is(':empty')){
            $('#t'+x).append('<span id="feilbokover">'+ordArray[x]+'</span>');
        }

  }
}
}
}

function canvas(){
  var canvas = document.querySelector('canvas');
  var c = canvas.getContext('2d');

  if (liv==7) {
    //Hode
    c.beginPath();
    c.lineWidth=2;
    c.arc(300,200,25,0,2*Math.PI);
    c.stroke();
    //øyne
    c.moveTo(290,190);
    c.lineTo(290,195);
    c.stroke();
    c.moveTo(310,190);
    c.lineTo(310,195);
    c.stroke();
    //munn
    c.beginPath();
    c.arc(300,205,5,0,Math.PI);
    c.stroke();
  }

if (liv==6) {
  //Kropp
  c.beginPath();
  c.lineWidth=2;
  c.moveTo(300, 225);
  c.lineTo(300,325);
  c.stroke();
}

if (liv==5) {
  //høyre arm
  c.moveTo(300,225);
  c.lineWidth=2;
  c.lineTo(350,275);
  c.stroke();
}

if (liv==4) {
  //Venstre arm
  c.moveTo(300,225);
  c.lineWidth=2;
  c.lineTo(250,275);
  c.stroke();
}

if (liv==3) {
  //Høyre ben
  c.moveTo(300,325);
  c.lineWidth=2;
  c.lineTo(330,395);
  c.stroke();
}

if (liv==2) {
  //Venstre ben
  c.moveTo(300,325);
  c.lineWidth=2;
  c.lineTo(270,395);
  c.stroke();
}

if (liv==1) {
  c.clearRect(0,0,canvas.width,canvas.height);
  //død mann
  c.beginPath();
  c.lineWidth=2;
  c.arc(290,200,25,0,2*Math.PI);
  c.stroke();
  //kropp
  c.beginPath();
  c.lineWidth=2;
  c.moveTo(300, 225);
  c.lineTo(300,325);
  c.stroke();
  //høyre arm
  c.moveTo(300,225);
  c.lineWidth=2;
  c.lineTo(310,275);
  c.stroke();
  //venste arm
  c.moveTo(300,225);
  c.lineWidth=2;
  c.lineTo(290,275);
  c.stroke();
  //høyre ben
  c.moveTo(300,325);
  c.lineWidth=2;
  c.lineTo(305,395);
  c.stroke();
  //venstre ben
  c.moveTo(300,325);
  c.lineWidth=2;
  c.lineTo(295,395);
  c.stroke();
  //øyne
  c.moveTo(300,190);
  c.lineTo(295,195);
  c.stroke();
  c.moveTo(295,190);
  c.lineTo(300,195);
  c.stroke();
  c.moveTo(280,195);
  c.lineTo(285,200);
  c.stroke();
  c.moveTo(285,195);
  c.lineTo(280,200);
  c.stroke();
  //munn
  c.moveTo(290,215);
  c.lineTo(300,210);
  c.stroke();

  //kran
  c.beginPath();
  c.lineWidth=13;
  c.moveTo(50,500);
  c.lineTo(100,450);
  c.lineTo(100,100);
  c.lineTo(305,100);
  c.stroke()
  c.lineWidth=4;
  c.moveTo(300,100);
  c.lineTo(300,175);
  c.stroke();
  c.beginPath();
  c.lineWidth=13;
  c.moveTo(150,500);
  c.lineTo(100,450);
  c.stroke();
  c.beginPath();
  c.lineWidth=7;
  c.moveTo(100,150);
  c.lineTo(150,100);
  c.stroke();
  }
}

function kran() {
  var canvas = document.querySelector('canvas');
  var c = canvas.getContext('2d');

  //Tegning av krana
  c.beginPath();
  c.lineWidth=13;
  c.moveTo(50,500);
  c.lineTo(100,450);
  c.lineTo(100,100);
  c.lineTo(305,100);
  c.stroke()
  c.lineWidth=4;
  c.moveTo(300,100);
  c.lineTo(300,175);
  c.stroke();
  c.beginPath();
  c.lineWidth=13;
  c.moveTo(150,500);
  c.lineTo(100,450);
  c.stroke();
  c.beginPath();
  c.lineWidth=7;
  c.moveTo(100,150);
  c.lineTo(150,100);
  c.stroke();
  }
});

function byttStil(stil){

  document.getElementById("cssLink").href = stil + ".css";
  document.getElementById("lydSpor").src = "ressurser/" + stil + ".mp3";

}
