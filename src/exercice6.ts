/*
Ejercicio 6

Estás trabajando en un ecommerce y tienes que programar el módulo del checkout. En este ejercicio no puedes usar interface. 
Recuerda dejar todo preparado para que en un futuro las id puedan cambiar de number a string sin tener que modificar mucho código.

Te viene dado un array de categorías en forma de strings. Este listado de categorías no va a cambiar nunca.

const categories = ["children", "adults", "pets"];

Crea un tipo CategoriesProducts para tipar un objeto así:

const categoriesProducts: CategoriesProducts = {
  adults: 33,
  children: 21,
  pets: 18,
};

Crea un tipo Product que tenga:

    id
    nombre
    categoría
    precio
    unidades en stock

Crea un tipo PreOrder que tenga:

    id de cliente
    fecha
    productos (opcional)
    importe total (opcional)

En el campo productos se debe almacenar un array de objetos que tengan esta información:

    id de producto
    unidades

Crea un tipo Order que tenga todas las propiedades de PreOrder pero obligatorias, con
un par de datos extra: la id y la dirección de entrega del pedido.

Crea un tipo ClientsOrdersAddresses para un objeto donde cada key será una id de cliente. En cada key tiene que haber un objeto cuya key será una id de pedido,
 y en cada una de estas keys tiene que haber un objeto con los productos del pedido y su dirección. Servirá para tipar un objeto así:

const clientsOrdersAddresses = {
  13: {  // id de cliente
    45: {  // id de pedido
      products: [{...}, {...}], // array con los productos del pedido
      address: "..." // la dirección del pedido
    },
    67: {
      products: [{...}, {...}],
      address: "..."
    }
  },
  15: {
    ...
  }
}

Una vez que tengas todos los tipos, crea las siguientes funciones:

addLineToPreOrder: recibe un pedido que puede ser Order o PreOrder. Si lo recibido es un pedido completo, debe lanzar un error. También recibe un objeto con la id del
 producto a añadir y las unidades.

processOrder: recibe un pedido que puede ser Order o PreOrder. Si lo recibido no es un pedido completo, debe lanzar un error. Si es un pedido completo, debe consolear sus datos.

increaseTotalProductsInCategory: recibe un objeto categoriesProducts, un nombre de categoría (de las existentes en ese objeto) y una cantidad, y le incrementa a esa categoría la 
cantidad recibida.

getOrderAddress: recibe un objeto clientsOrdersAddresses, una id de cliente y una id de pedido, y tiene que devolver la dirección de entrega.
*/


const categories = ["children", "adults", "pets"] as const;

type Id = number

type CategoriesProducts = Record<Category, number>

type Category = typeof categories[number];

type Product = {
  id: Id,
  name: string,
  category: Category,
  price: number
  stock: number,
}

const product1: Product = {
  id: 1,
  category:"adults" ,
  name: "joystick manual",
  price: 69,
  stock: 69
}

type PreOrderProduct = Pick<Product, 'id' | 'stock'>

type PreOrder = {
  clientId: Client['id'],
  date: Date,
  products?: PreOrderProduct[],
  total?: number
}

type Order = Required<PreOrder> & {
  id: Id,
  address: string    
}

type Client = {
  id: Id,
  name: string,
  address: string
}

type ClientOrderAdress = Record<Id, Record<Id, {products:Product[], address:Client["address"] }>>

const clientsOrdersAddresses: ClientOrderAdress = {
  13: {  // id de cliente
    45: {  // id de pedido
      products: [product1], // array con los productos del pedido
      address: "..." // la dirección del pedido
    },
    67: {
      products: [product1],
      address: "..."
    }
  },
}



function addLineToPreOrder(order: Order, productId: Id, cuantities: number): void
function addLineToPreOrder(order: PreOrder, productId: Id, cuantities: number): void
function addLineToPreorder(order: Order | PreOrder, productId: Id, cuantities: number): {productId: Id, cuantities: number} {
  
    if(typeof order === ) { throw new Error }
    return {productId, cuantities}
}


function processOrder(): void {

}

function increaseTotalProductsInCategory(): void {

}

function getOrderAddress(): void {

}