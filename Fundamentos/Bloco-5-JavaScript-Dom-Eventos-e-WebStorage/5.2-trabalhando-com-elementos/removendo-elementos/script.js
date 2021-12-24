// Remova todos os elementos filhos de paiDoPai exceto pai,
    // elementoOndeVoceEsta e primeiroFilhoDoFilho.

    const pai = document.getElementById('pai');

    for(let index = pai.childNodes.length - 1; index >= 0; index -= 1) {
        let currentChildren = pai.childNodes[index];
        if (currentChildren.id !== 'elementoOndeVoceEsta') {
            currentChildren.remove();
        }
    }

    const ultimoFilhodoFilho = document.getElementById('segundoEUltimoFilhoDoFilho');
    ultimoFilhodoFilho.remove();