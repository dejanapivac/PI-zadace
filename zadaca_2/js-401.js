var pojam = prompt("Unesi ime ili prezime");


let student = [
    {
        ime: 'Karla',
        prezime: 'Petrunović',
        upisan: true,
    },
    {
        ime: 'Marija',
        prezime: 'Kovačević',
        upisan: true,
    },
    {
        ime: 'Ken',
        prezime: 'Kaneki',
        upisan: true,
    },
    {
        ime: 'Lighto',
         prezime: 'Yagami',
        upisan: true,
    },
    {
        ime: 'Levi',
        prezime: 'Ackerman',
        upisan: false,
    },
    {
        ime: 'Killua',
        prezime: 'Zoldyck',
        upisan: true,
    },
    {
        ime: 'Hisoka',
        prezime: 'Morow',
        upisan: false,
    },
    {
        ime: 'Alluka',
        prezime: 'Zoldyck',
        upisan: true,
    },
    {
        ime: 'Shoto',
        prezime: 'Todoroki',
        upisan: true,
    },
    {
        ime: 'Roronoa',
        prezime: 'Zoro',
        upisan: false,
    }
]

function provjeri(lista, pojam){
    for (var i = 0; i <= lista.length; i++){
        if(pojam === lista[i].ime || pojam === lista[i].prezime && lista[i].upisan === true){
           if(lista[i].upisan === true) {
               return true;
        }
        else{
            return false;
        }
    }
    }
} 
console.log(provjeri(student, pojam));
