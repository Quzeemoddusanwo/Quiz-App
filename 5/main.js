var cars = "BMW";
switch (cars) {
    case "Honda":
        word = "There brands are okay";
        break;
    case "BMW":
        word = "There brands are okay";
        break;
    default:
        word = "No car is found";   
}
document.getElementById("demo").innerHTML = word;