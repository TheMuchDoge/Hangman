$(document).ready(function ()  {

//Deklarerer variabler som brukes gjennom hele koden
// ordBank: Array med alle ordene, ordArray: Det valgte ordet delt opp i bokstaver 
// forsokt: Bokstaver som er prøvd
var ordBank=new Array;
var ordArray=new Array;
var forsokt=new Array;
var input;
var c;
var canvas;
let liv;
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r'
,'s','t','u','v','w','x','y','z'];
var ord;

//Funksjonen som henter ordBank fra json hvis du har internett, eller fra script dersom du ikke er det
if (document.location.host) {
  $.getJSON("ordBank.json", function(data) {
  for(i=0; i<data.ordliste.length; i++) {
    ordBank [i]=new Array;
    ordBank [i][0]=data.ordliste [i].ord
  }
  neste()})
} else {
  console.log("Du kjører filen lokalt, begrenset mengde ord")
  ordBank = ["damer", "spill", "datamaskin", "brusmaskin", "mobiltelefon", "eple", "kalvskinnet", "databaser", "lagarbeid", "venner"];
  neste();
}

function neste() {
  //Antall liv du starter med
  liv=7;
  //"var valg" velger et tilfedlig tall basert på antall elementer i ordbanken
  var valg=Math.floor(Math.random()*ordBank.length);
  //Velger ordet avhenging av om brukeren kjører siden lokalt eller ikke. 
  if (document.location.host) {
  ord=ordBank[valg][0].toUpperCase();}
  else {
    ord=ordBank[valg].toUpperCase()
  }
  ordArray=ord.split("");
  //Lager alfabetet på skjermen, og gir dem tilsvarende bokstav i uppercase som både ID og tekst, ID brukes til å sjekke opp imot ordet senere.
  for(i=0;i<alphabet.length;i++){
      $('#knapper').append('<button id="'+alphabet[i].toUpperCase()+'" >'+alphabet[i].toUpperCase()+'</button>');
    }

$('#spill').append('<div id="livTekst">Du har '+liv+' liv igjen, ingen feil så langt!</div>');
//Kaller funksjonen tastatur når "keyup" merkes mens du er på siden, viktig for at tastaturet skal fungere.
  $(document).on("keyup", tastatur);

  //Lager tiles som tilsvarer lengden på ordet, disse brukes til å vise rette bokstaver.
  $('#spill').append('<div id="bokstav"></div>');
  var bokstaver=ord.length;
  for(j=0;j<bokstaver;j++){
      $('#bokstav').append('<div class="tile" id=t'+j+'></div>');
    }
canvasTegn();
  }
  //Lager en restartknapp som kaller reset funksjonen
  $('#restart').append('<button id="reset" class="res" >Restart</button>');
  //Funksjonen til resetknappen, den tømmer spill og knapper div's for å sikre at dem er tomme før neste spill startes.
  $('#reset').on("click",function (){
  while (spill.hasChildNodes()) {
    spill.removeChild(spill.lastChild);
  }
    while (knapper.hasChildNodes()) {
    knapper.removeChild(knapper.lastChild);
  } forsokt.length = 0;

    neste()

  })
  //Funksjonen som oppdaterer canvas når du bytter stil
  $('.res').on("click",function(){
    canvasTegn();
})

//Funksjonen som leser av tastatur input og setter bokstaven til input.
  function tastatur(event) {
    if(event.keyCode>64 && event.keyCode<91){
          input = String.fromCharCode (event.keyCode).toUpperCase();
          forsoktboks = false
          riktig=false
          //skrur av knappen så du bare kan trykke på den en gang
          $("#event.charCode").attr('disabled', 'disabled');
          // dobbeltsjekk av at bokstaven ikke er brukt før
              for(i=0;i<forsokt.length;i++){
                if(input==forsokt[i]){
                  forsoktboks=true
                  }
                } 
    //Hvis knappen ikke er brukt før (altså ikke i forsokt array) så bli bokstaven sendt til forsokt array og skripten går videre.
    if (!forsoktboks) {
      forsokt.push(input);
      sjekk()
    }
  }
};

    //Leser av input fra bokstavknappene på skjermen
    $("#knapper").on('click', 'button', function() {
      input = this.id;
      var forsoktboks = false
      for(i=0;i<forsokt.length;i++){
        if(input==forsokt[i]){
          forsoktboks=true
        }
      }
      //hvis knappen ikke er brukt før (altså ikke i forsokt array) så bli bokstaven sendt til forsokt array og skripten går videre.
          if (!forsoktboks) {
            forsokt.push(input);
            sjekk()
        }
    })

  //Sjekker om bokstaven er i ordet
    function sjekk() {
      //Disable knappen som blir trykket
      $("#"+input).attr('disabled', 'disabled');
      var gjettResultat = false;

    for(var x = 0;x<ordArray.length;x++){
      if(input == ordArray[x]){
        $('#t'+x).append(input.toUpperCase());
        gjettResultat = true;
        }
      }    
    
    //Hvis bokstaven er i ordet, kalles en funksjon som sjekker om hele svaret er korrekt
    if(gjettResultat){sjekkSvar();}
    else{feil();}
  }

//funksjon som sjekker om hele svaret er skrevet inn hvis en bokstav som er i ordet blir trykket.
function sjekkSvar() {
  var svar = "";
  for (var i = 0; i < ord.length; i++) {
    svar+=($('#t'+i).text());
  }
//hvis svaret er korrekt, så kalles en funksjon som skrur av input og fjerner canvas
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
  //hvis liv = 0, så skrus input av og spillover beskjeden leveres.
  if (liv<1) {
    skruAvInput();
    livTekst.innerHTML = "Du har " + liv + " liv igjen!";
    $('#spill').append('<div id="spillover">GAMEOVER!</div>');
    //fyller opp bokstavene som mangler hvis du taper.
    for(var x = 0;x<ordArray.length;x++){
      if(ordArray[x] == ordArray[x]){
        if ($('#t'+x).is(':empty')){
            $('#t'+x).append('<span id="feilbokover">'+ordArray[x].toUpperCase()+'</span>');
        }
      }
    }
  }
}
//skrur av all input(tastatur og bokstaver på sjermen fjernes)
function skruAvInput() {
  while (knapper.hasChildNodes()) {
  knapper.removeChild(knapper.lastChild);
  }
  $(document).off("keyup", tastatur);
}

var canvasStil = location.hash.match(/#(\w+)/)[1];
//tegner canvas utifra liv igjen
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

})


//Deklarerer variablene for å kunne bytte stil
var hash = location.hash;
var startStil = location.hash.match(/#(\w+)/)[1];

//Bytter stiler basert på location.hash
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

//Funksjonen for å kunne mute musikken
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
