var mydetails = {fname:"Quzeem", sname:"Odusanwo", age:"26"};
var x;
var word = "";
for(x in mydetails){
    word += mydetails[x] + "<br>";
}
document.getElementById("y").innerHTML = word;