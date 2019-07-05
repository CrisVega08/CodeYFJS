const products = require("./products");
const quantity = require("./quantity");
const clients = require("./clients");

/**
 * You will need make the variables and functions for buying products in the CYF store.
 * Clients discounts:
 * León Ceballos: 5%
 * Cristian Vega: 10%
 * Jesse Cogollo: 2%
 **/

const productsList = [];
const productsCant = [];

/** 
 * This fucntion has to return the total, fallowing the next rules:
 * 1: Into the function you have to print in the console the list of the products and the quantity after you apply the buy.
 * 2: The sum of all the products cost with 2 decimals.
 * 3: The total of the discount.
 **/
const result = getCostList(clients[0], productsList, productsCant);


console.log('The total of you purchase is: ' + result)
