
let poruka;

function izracun(bodovi){
    if(bodovi<40){
        poruka = "Pali ste!";
        return 1;
    }
    if(bodovi>=40 && bodovi<55){
        poruka = "Prolazzzz!!";
        return 2;
    }
    if(bodovi>=55 && bodovi<70){
        poruka = "Trojkica!";
        return 3;
    }
    if(bodovi>=70 && bodovi<85){
        poruka = "Četvorkaa good jobbb!";
        return 4;
    }
    if(bodovi>=85 && bodovi<100){
        poruka = "WOWW smarttt petica!!!!";
        return 5;
    }

}
let bodovi = prompt("Unesi broj bodova");
let ocjena = izracun(bodovi);
console.log(poruka);