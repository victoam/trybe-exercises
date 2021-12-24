//Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

function somaN(n) {
    soma = 0;
    for(let index = 1; index <= n; index += 1){
        soma = index + soma;

    }
    return soma;

}

console.log(somaN(6));