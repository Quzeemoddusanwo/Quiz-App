var submit = document.getElementById("submit");
submit.onclick = function(){
    var age = parseInt(document.getElementById("age").value);
    try{
        if(age < 18){
            throw"user must be 18 or above to enter";
        } else{
            document.getElementById("demo").innerHTML = "user is 18 or above";
        }
    }
    catch(err){
        document.getElementById("demo").innerHTML = err;
    }
}