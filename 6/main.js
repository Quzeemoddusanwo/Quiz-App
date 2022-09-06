function checkFee(){
    var School = document.getElementById("schools").value;
    switch(School){
        case "Gaposa":
            var amount = "N60,000"
            document.getElementById("amount").innerHTML = "The school fee of " + School  + " is " + amount;
            break;
        case "Ilaropoly":
            var amount = "N65,000"
            document.getElementById("amount").innerHTML = "The school fee of " + School  + " is " + amount;
            break;
        case "Laspotech":
            var amount = "N55,000"
            document.getElementById("amount").innerHTML = "The school fee of " + School  + " is " + amount;
            break;
        case "Kwarapoly":
            var amount = "N50,000"
            document.getElementById("amount").innerHTML = "The school fee of " + School  + " is " + amount;
            break;
        case "Ibadanpoly":
            var amount = "N45,000"
            document.getElementById("amount").innerHTML = "The school fee of " + School  + " is " + amount;
            break;
        case "Mapoly":
            var amount = "N69,000"
            document.getElementById("amount").innerHTML = "The school fee of " + School  + " is " + amount;
            break;
        case "Yabatech":
            var amount = "N70,000"
            document.getElementById("amount").innerHTML = "The school fee of " + School + "is " + amount;
            break;
        default:
            document.getElementById("amount").innerHTML = "Sorry for the inconveniences " + School  + " is currentl not available";
    }
}