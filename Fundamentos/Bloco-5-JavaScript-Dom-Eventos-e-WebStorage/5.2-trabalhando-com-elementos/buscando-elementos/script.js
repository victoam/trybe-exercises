const ondeEstou = document.getElementById('elementoOndeVoceEsta');
const pai = ondeEstou.parentElement;
pai.style.color = 'purple';

const filhoDoFilho = document.getElementById('primeiroFilhoDoFilho');
filhoDoFilho.innerText = 'Oi meu nome é Victor Amancio. Tudo bem?';

const primeiroFilho = pai.firstElementChild;

const filho1 = ondeEstou.previousElementSibling;

const elemento = ondeEstou.nextSibling;

const terceiro = ondeEstou.nextElementSibling;

const filho3 = pai.lastElementChild.previousSibling;