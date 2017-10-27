<script>
  var ordAlt = ["damer", "spill", "datamaskin"];
  // i genererer et tilfeldig tall, basert på lengden til ordAlt
  var i = Number(Math.floor((Math.random() * ordAlt.length)));
  // Bruker i til å deklarere hvilket ord som skal brukes
  var ordet = ordAlt[i];
  // liv er antall bokstaver i ordet foreløpig
  var liv = ordet.length;
  // Alerede brukt bokstaver
  var brukteBokstaver = [];

  // Input og button
  var inpBokstav = document.getElementById("inpBokstav");
  var gjettKnapp = document.getElementById("gjettKnapp");

  // De diverse utdataene
  var feilBokstavTekst = document.getElementById("feilBokstavTekst");
  var ordValgTekst = document.getElementById("ordValgTekst");
  var lengdeTekst = document.getElementById("lengdeTekst");
  var livTekst = document.getElementById("livTekst");
  var riktigBokstavTekst = document.getElementById("riktigBokstavTekst");

  // Fyller ut diverse utdata når siden lastes
  function konfigSpill(){
    ordValgTekst.innerHTML += ordet;
    lengdeTekst.innerHTML += ordet.length;
    livTekst.innerHTML += liv;
  }

  // Gjett-knappen, fungerer ikke optimalt
  gjettKnapp.onclick = function(){

    var gjettResultat = false;

    for(var x = 0;x<ordet.length;x++){
      if(inpBokstav.value == ordet[x]){
        gjettResultat = true;
        x = ordet.length;
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

  konfigSpill();
</script>
