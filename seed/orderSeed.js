const { Order } = require('../models/Index.js');

const orderSeed = async () => {
  try {
    // Create some orders
    const orders = await Order.create([
      {
        menu_item: [], // Your menu item details
        custom_pizza: [], // Your custom pizza details
        total_price: "0" // Total price details
      },
      {
        menu_item: [], // Your menu item details for Order 2
        custom_pizza: [], // Your custom pizza details for Order 2
        total_price: "0" // Total price details for Order 2
      },
      {
        menu_item: [], // Your menu item details for Order 2
        custom_pizza: [], // Your custom pizza details for Order 2
        total_price: "0" // Total price details for Order 2
      },
      {
        menu_item: [], // Your menu item details for Order 2
        custom_pizza: [], // Your custom pizza details for Order 2
        total_price: "0" // Total price details for Order 2
      },
      {
        menu_item: [], // Your menu item details for Order 2
        custom_pizza: [], // Your custom pizza details for Order 2
        total_price: "0" // Total price details for Order 2
      },
      {
        menu_item: [], // Your menu item details for Order 2
        custom_pizza: [], // Your custom pizza details for Order 2
        total_price: "0" // Total price details for Order 2
      },
      {
        menu_item: [], // Your menu item details for Order 2
        custom_pizza: [], // Your custom pizza details for Order 2
        total_price: "0" // Total price details for Order 2
      },
      {
        menu_item: [], // Your menu item details for Order 2
        custom_pizza: [], // Your custom pizza details for Order 2
        total_price: "0" // Total price details for Order 2
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