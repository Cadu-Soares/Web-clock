function carregar() {
  var msg = window.document.getElementById("msg");
  var img = window.document.getElementById("image");
  var data = new Date();
  var h = data.getHours();
  //var h = 16; // teste de funcionalidade
  var m = data.getMinutes()
  var s = data.getSeconds()
  msg.innerHTML = `Agora são ${h}:${m}:${s}`;
  if (h >= 0 && h < 12) {
    //Manhã!
    img.src = "manhã.png";
    document.body.style.background = "#e2cd9f";
  } else if (h >= 12 && h < 18) {
    //Tarde!
    img.src = "tarde.png";
    document.body.style.background = "#e3824d";
  } else {
    //Noite!
    img.src = " noite.png";
    document.body.style.background = "#515154";
  }
}