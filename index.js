const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

console.log("---------A--------\n")
const pizzasImpar = pizzas.filter(numero => numero.id % 2 !== 0)
const pizzasImparNombres = pizzasImpar.map(pizza => pizza.nombre)
console.log("Las pizzas con ID impar son: "+pizzasImparNombres)

console.log("---------B--------\n")
const menorA600 = pizzas.filter(menor=> menor.precio < 600);
const nombreMenor = menorA600.map(pizza => pizza.nombre)
const precioMenor =  menorA600.map(p=> p.precio)
console.log("La "+nombreMenor+" tiene un valor de "+precioMenor)

console.log("---------C--------\n")
pizzas.forEach(pizza=>console.log(pizza.nombre+":"+" $"+pizza.precio))

console.log("---------D--------\n")
pizzas.forEach(pizza => {
  console.log("Ingredientes de la " + pizza.nombre + ":")
  pizza.ingredientes.forEach(ingrediente => {
    console.log(ingrediente)
  })
})