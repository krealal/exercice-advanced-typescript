// A partir de esta interfaz:

// interface Dog {
//   name: string;
//   breed: string;
//   age: number;
//   givesPaw: boolean;
// }

// Crea una función changeDogData que reciba un perro como primer parámetro, y un subconjunto de propiedades de un perro como segundo.
// Debe modificar las propiedades recibidas y devolver el nuevo perro cambiado.

// let dog = {
//   name: "Toby",
//   breed: "Chucher",
//   age: 5,
//   givesPaw: false,
// };

// dog = changeDogData(dog, { age: 6, givesPaw: true });


// {
//   name: "Toby",
//   breed: "Chucher",
//   age: 6,
//   givesPaw: true
// }



interface Dog {
  name: string;
  breed: string;
  age: number;
  givesPaw: boolean;
}

function changeDogData(dog: Dog, dogProperties: Partial<Dog>): Dog {
    const newDog: Dog = {...dog, ...dogProperties}
    return newDog
}

let dog = {
  name: "Toby",
  breed: "Chucher",
  age: 5,
  givesPaw: false,
};

dog = changeDogData(dog, { age: 6, givesPaw: true });
