let names = {
    person1: 'João',
    person2: 'Maria',
    person3: 'Jorge',
  };

  for (let index in names) {
      console.log('Olá ', names[index]);
  }

//Usando o objeto abaixo, utilize For/in e imprima um console.log com as chaves e valores desse objeto.

  let car = {
    model: 'A3 Sedan',
    manufacturer: 'Audi',
    year: 2020
  };

  for(index in car){
      console.log(index + ':', car[index]);
  }

  