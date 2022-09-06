var names = ["Quzeem", "Mariam", "Gafar", "Sofiyyah"];
var x = 0;
var fen = names.length;
var word = "";
for(x = 0; x < fen; x++){
    word += names[x] + "<br>";
}
document.getElementById("y").innerHTML = word;