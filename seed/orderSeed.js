const { Order } = require('../models/Index.js');

const orderSeed = async () => {
  try {
    // Create some orders
    const orders = await Order.create([
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
      {
        menu_item: [],
        custom_pizza: [],
        total_price: "0"
      },
    ]);
    
    console.log('Orders seeded successfully');
    return orders
  } catch (error) {
    console.error('Error seeding orders:', error);
    throw error
  }
};

module.exports = orderSeed