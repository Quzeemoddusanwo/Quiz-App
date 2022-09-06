function myFunction() {
    var message, x;
    message = document.getElementById("p01");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    x = document.getElementById("demo1").value;
    x = document.getElementById("demo2").value;
    x = document.getElementById("demo3").value;
    try { 
      if(x == "")  throw ",please input the following complete!";
      x = Number(x);
      if(x > 2101021100)  throw "is a com. sci student,we will get back to you soon in your  dropped email address.";
      if(x == 210110,210111)   throw " is not a com. sci student";
    }
    catch(err) {
      message.innerHTML = "Student " + err;
    }
}