document.getElementById("submit").addEventListener("click", function(){
    var matric = document.getElementById("matric").value;
    if(matric < 50){
        alert("You have Upper Credit");
    }else if(matric < 100){
        alert("You have Lower Credit");
    }else if(matric < 150){
        alert("You have Pass");
    }else if(matric < 200){
        alert("You have CO (CarryOver)");
    }else{
        alert("Dear Student you totally fail")
    }
});