const x = document.getElementById('username');
const y = document.getElementById('password');
const z = document.getElementById('submit');
const a = document.getElementById('loadingscreen');

let name = "muhammad_maroof1";
let pass = "ilu>c8csab";

const date = new Date();
const time = date.toDateString();

z.onclick = function(){
    if ( x.value == name && y.value == pass){
        console.log("Login Succesful");
        a.style.display = "block";
        console.log(time);
        return false;
    }else{
        console.log("Login Failed");
        console.log(time);
    }
};

