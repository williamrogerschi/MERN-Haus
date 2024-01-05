const { User } = require('../models/Index.js');

const userSeed = async (carts) => {
  try {

    if (!Array.isArray(carts)) {
      throw new Error('Carts is not an array');
    }
    // Create users with associated carts
    const users = [];
    const numberOfUsers = 10;
    const availableCarts = carts.slice(0, numberOfUsers)

    for (let i = 1; i <= availableCarts.length; i++) {
      users.push({ user_name: `User${i}`, points: 0, cart: availableCarts[i - 1]._id });
    }
    await User.insertMany(users);
    
    console.log('Users seeded successfully');
  } catch (error) {
    console.error('Error seeding users:', error);
  }
};

module.exports  = userSeed