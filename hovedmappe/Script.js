$(function(){
    onPageLoad();
});
function onPageLoad(){




var ordBank=new Array;
var ordArray=new Array;
var forsokt=new Array;
//var ord;
var input;
var c;
var canvas;
let liv;

// var ordValgTekst = document.getElementById("ordValgTekst");


var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
,'s','t','u','v','w','x','y','z','æ','ø','å'];

var ordAlt = ["damer", "spill", "datamaskin"];
var valg;
var ord;





neste();

//kaller på funksjon til Ã¥ finne ordet
function neste() {

  valg = Number(Math.floor((Math.random() * ordAlt.length)));
  ord = ordAlt[valg].toUpperCase();
  ordArray=ord.split("");

  for(i=0;i<alphabet.length;i++){
      $('#knapper').append('<button id="'+alphabet[i].toUpperCase()+'" >'+alphabet[i].toUpperCase()+'</button>');
    }
  $('#spill').append('<div id="bokstav"></div>');
  //  finnord ();
  liv=7;
$('#spill').append('<div id="livTekst">Du har '+liv+' liv igjen, ingen feil så langt!</div>');

  $(document).on("keyup", tastatur);



  //ska jo egentlig lag boksa, men vetdafaen

  var bokstaver=ord.length;

  for(j=0;j<bokstaver;j++){
      $('#bokstav').append('<div class="tile" id=t'+j+'></div>');
    }
canvasTegn();
  }
  $('body').append('<button id="reset" class="res" >Restart</button>');
  $('#reset').on("click",function (){
  while (spill.hasChildNodes()) {
    spill.removeChild(spill.lastChild);
  }
    while (knapper.hasChildNodes()) {
    knapper.removeChild(knapper.lastChild);
  }forsokt=0
    /*  ordArray.length = 0
      for(i=0;i<alphabet.length;i++){
            forsokt.push(alphabet[i].toUpperCase());}*/
    neste()

  })
  $('.res').on("click",function(){
    console.log(canvasStil)
    canvasTegn();
})


  function tastatur(event) {
    if(event.keyCode>64 && event.keyCode<91){
          input = String.fromCharCode (event.keyCode).toUpperCase();
          forsoktboks = false
          riktig=false
          $("#event.charCode").attr('disabled', 'disabled');

              for(i=0;i<forsokt.length;i++){
                if(input==forsokt[i]){
                  forsoktboks=true
          }
  }

  if (!forsoktboks) {
    forsokt.push(input);
    sjekk()

        }
      }
    };


    $("#knapper").on('click', 'button', function() {

      input = this.id;
      var forsoktboks = false
      for(i=0;i<forsokt.length;i++){
        if(input==forsokt[i]){
          forsoktboks=true
        }
      }
          if (!forsoktboks) {
            forsokt.push(input);
            sjekk()


        }
    })



  //onclick funksjon for alfabetet
    function sjekk() {
      console.log(input)

      //disable knappen som blir trykket
      var gjettResultat = false;
      $("#"+input).attr('disabled', 'disabled');
      //  var input = inpBokstav.value

    for(var x = 0;x<ordArray.length;x++){
      if(input == ordArray[x]){
        $('#t'+x).append(input.toUpperCase());
        gjettResultat = true;

          }
}
    if(gjettResultat){sjekkSvar();}
    else{feil();}
  }

//funksjon som sjekker om hele svaret er skrevet inn hvis en bokstav som er i ordet blir trykket.
function sjekkSvar() {
  var svar = "";
  for (var i = 0; i < ord.length; i++) {
    svar+=($('#t'+i).text());
  }

  if(svar==ord){
        $('#spill').append('<div id="spillvant">DU VANT!</div>');
        skruAvInput();
        c.clearRect(0,0,canvas.width,canvas.height);}
  }

//funksjon som skal redusere liv når en bokstav som ikke er i ordet blir trykket
function feil() {
  liv-=1
  canvasTegn();
  livTekst.innerHTML = "Du har bare " + liv + " liv igjen!";
  if (liv<1) {
    skruAvInput();
    livTekst.innerHTML = "Du har " + liv + " liv igjen!";
    $('#spill').append('<div id="spillover">GAMEOVER!</div>');
    $(document).off("keypress", tastatur);
    while (knapper.hasChildNodes()) {
    knapper.removeChild(knapper.lastChild);}
    for(var x = 0;x<ordArray.length;x++){
      if(ordArray[x] == ordArray[x]){
        if ($('#t'+x).is(':empty')){
            $('#t'+x).append('<span id="feilbokover">'+ordArray[x].toUpperCase()+'</span>');
        }

  }
}
}
}
function skruAvInput() {
  while (knapper.hasChildNodes()) {
  knapper.removeChild(knapper.lastChild);
  }
  $(document).off("keyup", tastatur);
}

var canvasStil = location.hash.match(/#(\w+)/)[1];

function canvasTegn(){
  canvas = document.querySelector('canvas');
  c = canvas.getContext('2d');
  canvasStil = location.hash.match(/#(\w+)/)[1];

  if (liv==7) {
    var img1=new Image();
    img1.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde1.gif";
    img1.onload=function(){
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img1,0,0);

      }
    }

  if (liv==6) {
    var img2=new Image();
    img2.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde2.gif";
    img2.onload=function() {
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img2,0,0);
    }
  }
  if (liv==5) {
    var img3=new Image();
    img3.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde3.gif";
    img3.onload=function() {
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img3,0,0);
    }
  }
  if (liv==4) {
    var img4=new Image();
    img4.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde4.gif";
    img4.onload=function() {
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img4,0,0);
    }
  }
  if (liv==3) {
    var img5=new Image();
    img5.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde5.gif";
    img5.onload=function() {
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img5,0,0);
    }
  }
  if (liv==2) {
    var img6=new Image();
    img6.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde6.gif";
    img6.onload=function() {
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img6,0,0);
    }
  }
  if (liv==1) {
    var img7=new Image();
    img7.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde7.gif";
    img7.onload=function() {
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img7,0,0);
    }
  }
  if (liv==0) {
    var img8=new Image();
    img8.src="ressurser/" + canvasStil + "_canvas/" + canvasStil + "_bilde8.gif";
    img8.onload=function() {
      c.clearRect(0,0,canvas.width,canvas.height);
      c.drawImage(img8,0,0);
    }
  }
}

}

  //***************** HER JOBBER ELIAS

var hash = location.hash;
var startStil = location.hash.match(/#(\w+)/)[1];

function byttStil(stil){
  if(stil=="bit"){
    document.getElementById("overskrift").innerHTML = "8-" + stil + " hangman";
    document.getElementById("tittel").innerHTML = "8-" + stil.toUpperCase() + " HANGMAN";
  }else{
    document.getElementById("overskrift").innerHTML = stil + " hangman";
    document.getElementById("tittel").innerHTML = stil.toUpperCase() + " HANGMAN";
  }
  document.getElementById("cssLink").href = "styling_" + stil + ".css";
  document.getElementById("lydSpor").src = "ressurser/" + stil + ".mp3";
  location.hash = stil;
}

function muteLyd(){
  var lyd = document.getElementById("lydSpor");
  if(lydSpor.muted == false){
    lydSpor.muted = true;
    document.getElementById("muteknapp").innerHTML = "UNMUTE";
  }else{
    lydSpor.muted = false;
    document.getElementById("muteknapp").innerHTML = "MUTE";
  }
}
