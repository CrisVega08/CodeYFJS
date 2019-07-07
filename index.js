const products = require("./products");
const quantity = require("./quantity");
const clients = require("./clients");
const costs = require("./costs");

/**
 * Puedes crear las variables y funciones necesarias para que el sistema funcione.
 * Debe simular una compra en una tienda y arrojar el total de la compra teniendo en cuenta los siguientes descuentos:
 * León Ceballos: 5%
 * Cristian Vega: 10%
 * Jesse Cogollo: 2%
 **/

const productsListIds = [34, 1, 9, 8, 23, 11, 40, 14, 6, 33, 29, 20, 41, 15, 5];
const productsQuantities = [
  2,
  5,
  3,
  9,
  2,
  4,
  2,
  3,
  10,
  8,
  6,
  12,
  4,
  5,
  2,
  7,
  7
];

/**
 * Requerimientos:
 * 1: Dentro de la función principal deberás imprimir la lista de productos con la cantidad restante después de la compra.
 * 2: Imprimir el valor total sin aplicar el descuento. El número debe tener dos decimales.
 * 3: Imprimir el total del descuento aplicado.
 * 4: Si no hay suficientes productos se debe agregar a la lista de compra solo los que alcancen.
 **/

// TODO: Si crees que es necesesario incluye más funciones para las pequeñas tareas

// Funciones adicionales aquí...

let stock;

// TODO: Función Principal getCostList
function getCostList(client, productsIds, quantities) {
  // Código aquí...

  const nombreproductos = productsIds.map(item => products[item]);
  const stock = productsIds.map(item => quantity[item]);
  const costound = productsIds.map(item => costs[item]);
  const pedido = productsIds.map((item, index) => quantities[index]);

  const nuevopedido = stock.map((item, index) => {
    if (item < pedido[index]) {
      return item;
    } else {
      return pedido[index];
    }
  });

  const nuevostock = stock.map((item, index) => item - nuevopedido[index]);
  console.log("******** El nuevo stock es: *********** ");
  nuevostock.forEach((item, index) =>
    console.log(nombreproductos[index], item)
  );

  // console.log(nombreproductos, nuevostock);

  const subtotal = costound.map((item, index) => item * nuevopedido[index]);

  valortotal = subtotal.reduce((a, b) => a + b);

  // console.log(stock, pedido, nuevopedido);
  //console.log(nuevopedido, costound, subtotal);
  console.log("El valor de la compra sin descuento es: " + valortotal);

  function descuento(user) {
    if (user === "León Ceballos") {
      return valortotal * 0.95;
    } else if (user === "Cristian Vega") {
      return valortotal * 0.9;
    } else if (user === "Jesse Cogollo") {
      return valortotal * 0.98;
    }
  }

  return descuento(client).toFixed(2);

  // console.log((valdesc = descuento(client)));
}

const result = getCostList(clients[0], productsListIds, productsQuantities);

// Imprime el total de la compra
console.log("El total de la compra es: " + result);

/**
 * TE RECOMENDAMOS
 * 1. Primero recorre, suma y multiplica los productos de acuerdo a la cantidad
 * 2. Saca el descuento según el cliente
 * 3. Aplica el descuento  al total
 * 4. Al utilizar el console.log pon titulos a lo que imprimes
 */

/**
 * LISTA DE CHEQUEO
 * Calcular el total de la compra
 * Imprimir los productos con la  cantidad restante luego de la compra
 * Calcular el descuento
 * Imprimir el descuento
 * Aplicar descuento al total
 * Imprime el total
 */
