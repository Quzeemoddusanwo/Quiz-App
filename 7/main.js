var towns = ["Lagos", "Jos", "Porthacourt", "Abeokuta"];
var len = towns.length;
var x = 0;
var word = "";

while(x < len){
    word += "Someday, I want to go to " + towns[x] + " <br>";
    x++;
}
document.getElementById("demo").innerHTML = word;