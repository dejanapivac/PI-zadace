let zaposlenik = {
    ime: "Marija",
    prezime: "Marijić",
    odjel: {
        naziv: "Marketing",
        sifra_odjela: 676767
    },
    upisane_sifre_projekata: [1333, 8888, 2345],
    krajnji_rokovi: [
        {
            datum: "15.8.2020.",
            sifra_projekta: 123,
        },
        {
            datum: "17.4.2021.",
            sifra_projekta: 0000
        }
    ] 
}
console.log("Šifra odjela: " + zaposlenik.odjel.sifra_odjela);
console.log("Šifra prvog projekta: " + zaposlenik.krajnji_rokovi[0].sifra_projekta);