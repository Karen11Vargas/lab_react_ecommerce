
/**
 * 
 * @param {Array} products 
 * @returns {number}
 */
export const totalPrice = (products) =>{
   return products.reduce(( sum, product ) => sum + (product.price * product.quantity), 0);
}