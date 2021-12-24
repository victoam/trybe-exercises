// Faça um programa que retorne o maior de três números. Defina, no começo do programa, três constantes com os valores que serão comparados.

function maiorDeTres(a, b, c) {
    if(a > b && a > c){
        return 'O maior número é: ' + a;
    } else if(b > a && b > c) {
        return  'O maior número é: ' + b;
    } else {
        return 'O maior número é: ' + c;
    }
}
