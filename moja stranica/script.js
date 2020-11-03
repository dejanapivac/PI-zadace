function provjera(){
    if(ime.value == '' || password.value == '' || email.value == '' ||  poruka.value == ''){
        alert("Unesite sva polja.");
    }
    else{
        alert("Sve je u redu!");
    }
}



let ime = 'Dejana';
let prezime = 'Pivac';
let osoba_dejana = {
    ime: "Dejana",              /*ime, prezime i to su ključevi pa moramo imenovati kao i varijable inace, lakše pratiti
                                    preglednost i sve to, oib sa stringom radi, OVDJE PAZI NA ZAREZE */
    prezime: "Pivac",
    godiste: 1999,
    kolegiji: [
        {naziv: "PI", godina: 3},
        {naziv:"UPP", godina: 3},
    ],
    zaposlena: flase,
};
let osoba_marko = {
    ime: "marko",              
    prezime: "mirkic",
    godiste: 1999,
};
console.log(osoba);
function posalji_na_backend(osoba){
    console.log(osoba.ime);
    console.log(osoba.prezime);
}
posalji_na_backend(osoba_dejana)


/*function posalji_al(){       ovako mozemo pozvati fuknciju
    alert('ok');
}                            


let f2 = function (){       ovo je anonimna f-ja
    alert('naćin 2');
}

function zbroj(a, b){
    let z = a+b;
    return z;
}

console.log('zbroji', zbroj(4+5));

let z2 = function (a, b){
    return a+b;
}

let z3 = (a, b) => a+b;

console.log('zbroji 2, z3(4+5))      ???  

let z3 = (a, b) => ((a >= 0 ? a+b : a-b));      ????? 

function posalji_formu(){
     let ime = document.getElementById('ime').value
     let url=""
}
alert('ime');
*/



/*let ime = document.getElementById("ime").value;
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
} */