const { Cart } = require('../models/Index.js');

const cartSeed = async (orders) => {
  try {

    if (!Array.isArray(orders)) {
      throw new Error('Orders is not an array');
    }
    // Create carts with associated orders
    const carts = orders.map(order => ({ current_order: order._id }));

    const createdCarts = await Cart.create(carts);

    console.log('Carts seeded successfully');
    return createdCarts;
  } catch (error) {
    console.error('Error seeding carts:', error);
    throw error; // Propagate the error further
  }
};

module.exports = cartSeed