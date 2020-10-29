var istiZnakovi = function (str) {
    var max = 0,
        najv = '';
     str.split('').forEach(function(char){
       if(str.split(char).length > max) {
           max = str.split(char).length;
           najv = char;
        }
     });
     return najv;
   };

console.log(istiZnakovi("baaaccd")) 
console.log(istiZnakovi("ba2dll")) 