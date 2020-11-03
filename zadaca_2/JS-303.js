function ackermann(m, n){
    let rez=0;
    if(m === 0){
        return rez=n+1;
    }
    else if(m > 0 && n === 0){
        return rez=ackermann((m-1), 1);
    }
    else if(m > 0 && n > 0){
        return rez = ackermann((m-1), ackermann(m, (n-1)));
    }
    
} 
console.log(ackermann(0, 5)) // → 6
console.log(ackermann(5, 0)) // → 65533
console.log(ackermann(3, 6)) // → 509
console.log(ackermann(3, 3)) // → 61

