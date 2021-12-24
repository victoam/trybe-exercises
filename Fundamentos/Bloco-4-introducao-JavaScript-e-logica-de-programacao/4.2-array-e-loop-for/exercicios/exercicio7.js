// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let min = null;

for(let number of numbers){
    if(min === null) {
        min = number;
    }else if( number < min) {
        min = number;
    }
    
}
    

console.log (min);