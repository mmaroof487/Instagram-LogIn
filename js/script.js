var x = document.getElementById('username');
var y = document.getElementById('password');
var z = document.getElementById('submit');
var a = document.getElementById('loadingscreen');

var name = "muhammad_maroof1";
var pass = "ilu>c8csab";

z.onclick = function(){
    if ( x.value == name && y.value == pass){
        console.log("Login Succesful");
        a.style.display = "block";
        return false;
    }else{
        console.log("Login Failed");
    }
};