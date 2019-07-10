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
const productsQuantities = [2, 5, 3, 9, 2, 4, 2, 3, 10, 8, 6, 12, 4, 5, 2, 7, 7];

/** 
 * Requerimientos:
 * 1: Dentro de la función principal deberás imprimir la lista de productos con la cantidad restante después de la compra.
 * 2: Imprimir el valor total sin aplicar el descuento. El número debe tener dos decimales.
 * 3: Imprimir el total del descuento aplicado.
 * 4: Si no hay suficientes productos se debe agregar a la lista de compra solo los que alcancen.
 **/

// TODO: Si crees que es necesesario incluye más funciones para las pequeñas tareas

// Funciones adicionales aquí...

// TODO: Función Principal getCostList
function getCostList(client, productsIds, quantities) {
  // Código aquí...
      var total = 0 
      var descuento = total * 0.10;

    console.log(productsIds);
    productsIds.forEach((element, index) => {
      console.log("nombre producto:", products[element])
      console.log("cantidad de productos que tengo:", quantity[element]);
      console.log("cantidad a comprar", productsQuantities[index]);
      console.log("costo", costs[element]);
      console.log("clientes", clients[index]);
      var costo = 0;
      var solicitudUsuario = quantities[index];
      var miInventario = quantity[element];
      if (solicitudUsuario > miInventario){
        costo = miInventario * costs[element]; 
      }
        else {
          costo= costs[element] * solicitudUsuario;
        }
        total = total + costo;
        console.log(total);
    }); 
    
  
    
    /*
    console.log(quantities);
    quantities.forEach(element1 => {
      console.log(quantities[element1])
    });
    console.log(client);
    
    const map1 = products.map(function(element){
      return element*2;                     
    });
    
  console.log(element);*/
  //console.log("nombre", productsListIds, [element]);
}

const result = getCostList(clients[0], productsListIds, productsQuantities);

// Imprime el total de la compra
console.log('El total de la compra es: ', result)
  

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
