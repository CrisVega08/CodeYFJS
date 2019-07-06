const products = require("./products");
const quantity = require("./quantity");
const clients = require("./clients");

/**
 * Puedes crear las variables y funciones necesarias para que el sistema funcione.
 * Debe simular una compra en una tienda y arrojar el total de la compra teniendo en cuenta los siguiens descuentos:
 * León Ceballos: 5%
 * Cristian Vega: 10%
 * Jesse Cogollo: 2%
 **/

const productsList = [];
const productsCant = [];

/** 
 * Restricciones:
 * 1: Dentro de la función principal deberás imprimir la lista de productos con la cantidad con la que quedaron después de la compra.
 * 2: El valor total sin aplicar el descuento. El número debe tener dos decimales.
 * 3: El total del descuento aplicado.
 **/

// TODO: Si crees que es necesesario incluye más funciones para las pequeñas tareas


// TODO: Función Principal getCostList

const result = getCostList(clients[0], productsList, productsCant);

// Imprime el total de la compra
console.log('El total de la compra es: ' + result)
