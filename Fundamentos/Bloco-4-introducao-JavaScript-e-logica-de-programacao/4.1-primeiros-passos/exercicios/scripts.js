// programa para cada operação aritmetica básica.

let a = 5;
let b = 7;

//adição
console.log(a + b);

//subtração
console.log(a - b);

//multiplicação
console.log (a * b);

//Divisão
console.log (a / b);

//Módulo
console.log (a % b);

//2 - programa que retorne o maior de dois númenros

const valor1 = 12;
const valor2 = 15;

if (valor1 > valor2){
    console.log ("valor1 é o maior!");
}else if (valor2 > valor1) {
    console.log("Valor2 é o maior");
}



//3 - programa que retorne o maior de três numeros

const numero1 = 20;
const numero2 = 13;
const numero3 = 7;

if (numero1 > numero2 && numero3){
    console.log ("numero1 é o maior");
}else if (numero2 > numero1 && numero3){
    console.log ("numero2 é o maior");
}else if (numero3 > numero1 && numero2){
    console.log("numero3 é o maior");
}

//4 - programa que retorne positivo ou negativo

const positiveOrNegative = -2;

if(positiveOrNegative > 0){
    console.log ("positive");
}else if (positiveOrNegative < 0){
    console.log ("negative");
}else{
    console.log ("Zero")
}

//5 - programa que defina três constantes com os valores dos tres ângulos internos de um triângulo

const ia = 110;
const ib = 40;
const ic = 30;

if ((ia + ib + ic) === 180){
    console.log (true);
}else if ((ia + ib + ic) !== 180){
    console.log (false);
}else{
    console.log ("Houve algum erro");
}

//6 - programa que receba o nome de uma peça de xadrez e retorne os movimentos dela

const chessPiece =  'rainha';

switch(chessPiece.toLowerCase()){
    case 'peão':
        console.log("Peão > uma casa pra frente e no primeiro movimentos pode andar duas casas");
        break;
    case 'torre':
        console.log("Torre > linha reta horizontalmente e verticalmente");
        break; 
    case 'cavalo':
        console.log("Cavalo > em 'L' e pode pular sobre as peças");
        break;
    case  'bispo' :
        console.log ("Bispo > linha reta diagonal");
        break;
    case 'rainha' :
        console.log ("Rainha > linha reta verticalmente, horizontalmente ou diagonalmonte");
        break;
    case 'rei':
        console.log ("Rei > uma casa em qualquer direção");
        break; 
    default:
        console.log("Houve algum erro");  
};

//7 - Programa que converte uma nota dada em porcentagem (0 a 100) em conceitos e A a F.

const nota = 80;

if(nota < 0 || nota > 100){
    console.log("Houve algum erro");

}else if(nota >= 90){
    console.log("A");

}else if(nota >= 80){
    console.log("B");

}else if(nota >= 70){
    console.log("C");

}else if(nota >= 60){
    console.log("D");

}else if(nota >= 50){
    console.log("E");

}else if(nota < 50){
    console.log("F");

}

//8 - Programa que defina três números em constantes e retorne true se um dos três for par.

const imparOuPar1 = 7;
const imparOuPar2 = 6;
const imparOuPar3 = 4;

let isEven = false;

if(imparOuPar1 % 2 === 0 || imparOuPar2 % 2 === 0 || imparOuPar3 % 2 === 0){
    isEven = true;
}
console.log(isEven);

//9 - Programa que defina três numeros em constantes e retorne true se um dos três for impar.


const d = 6;
const e = 8;
const f = 10;

let isOdd = false;

if(d % 2 !== 0 || e % 2 !== 0 || f % 2 !== 0){
    isOdd = true;
};

console.log(isOdd);

//10 - Programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.

const custoDoProduto = 2;
const valorDeVenda = 5;

if(custoDoProduto >= 0 || valorDeVenda >= 0 ) {
    const valorCustoTotal = custoDoProduto + 0.4;
    const lucro = (valorDeVenda - valorCustoTotal) * 1000;
    console.log(lucro);
}else{
    console.log("Houve algum erro");
}

//11 - programa que, dado um salário bruto, calcule o líquido a ser recebido.

let aliquotaINSS;
let aliquotaIR;

const salarioBruto = 1700.50;

if(salarioBruto <= 1556.94){
    aliquotaINSS = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92){
    aliquotaINSS = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82){
    aliquotaINSS = salarioBruto * 0.11;
}else{
    aliquotaINSS = 570.88;
}  

const salarioBase = salarioBruto - aliquotaINSS;

if(salarioBase <= 1903.98){
    aliquotaIR = 0;
} else if(salarioBase <= 2826.65){
    aliquotaIR = (salarioBase * 0.075) - 142.80;
} else if (salarioBase <= 3751.05){
    aliquotaIR = (salarioBase * 0.15) - 354.80;
} else if(salarioBase <= 4664.68){
    aliquotaIR = (salarioBase * 0.2215) - 636.13;
}else{
    aliquotaIR = (salarioBase * 0.275) - 869.36;
}

console.log ("Sálario: " + (salarioBase - aliquotaIR));
    



