let ime = document.getElementById("ime").value;
let password = document.getElementById("password").value;
let email = document.getElementById("email").value;
let poruka = document.getElementById("poruka").value;
var button= document.getElementById("button");


button.onclick = function(){
    if(ime.value == '' || password.value == '' || email.value == '' ||  poruka.value == ''){
        alert("Unesite sva polja.");
    }
    else{
        alert("Sve je u redu!");
    }
}