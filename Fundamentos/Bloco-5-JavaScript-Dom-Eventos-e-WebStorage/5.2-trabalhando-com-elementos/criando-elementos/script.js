//Crie um irmão para elementoOndeVoceEsta .
const pai = document.getElementById('pai');
let irmaoOndeEstou = document.createElement('section');
pai.appendChild(irmaoOndeEstou);

//Crie um filho para elementoOndeVoceEsta .

const ondeEstou = document.getElementById('elementoOndeVoceEsta');
let filho = document.createElement('div');
ondeEstou.appendChild(filho);

//Crie um filho para primeiroFilhoDoFilho .

const fDoFilho = document.getElementById('primeiroFilhoDoFilho');
let filho1 = document.createElement('div');
fDoFilho.appendChild(filho1);

//A partir desse filho criado, acesse terceiroFilho .

const terceiroFilho = filho1
      .parentElement // primeiroFilhoDoFilho
      .parentElement // elementoOndeVoceEsta
      .nextElementSibling; // terceiroFilho
    console.log(terceiroFilho);