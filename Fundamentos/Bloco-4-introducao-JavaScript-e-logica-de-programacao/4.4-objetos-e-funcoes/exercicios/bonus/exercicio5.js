//Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome , depois faça o mesmo para os moradores do bloco 2.

for (let index = 0; index < moradores.blocoUm.length; index += 1) {
    console.log(moradores.blocoUm[index].nome + ' ' + moradores.blocoUm[index].sobrenome);
  }
  
  for (let index = 0; index < moradores.blocoDois.length; index++) {
    console.log(moradores.blocoDois[index].nome + ' ' + moradores.blocoDois[index].sobrenome);
  }