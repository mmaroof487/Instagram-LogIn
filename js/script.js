var x = document.getElementById('username');
var y = document.getElementById('password');
var z = document.getElementById('submit');
var a = document.getElementById('image');

var name = "muhammad_maroof1";
var pass = "ilu>c8csab";

z.onclick = function(){
    if ( x.value == name && y.value == pass){
        console.log("Login Succesful");
    }else{
        console.log("Login Failed");
    }
};