const header = document.getElementById('header-container');
header.style.backgroundColor = '#0000CD';

const subTitulos = document.getElementsByTagName('h3');
for(let index = 0; index < subTitulos.length; index += 1){
    subTitulos[index].style.backgroundColor = '#00BFFF';
}

const color = document.getElementsByTagName('div');
for(let index = 0; index < color.length; index += 1){
    color[index].style.backgroundColor = '#B0C4DE'
}


const footer = document.querySelector('#footer-container');
footer.style.backgroundColor = '#191970'