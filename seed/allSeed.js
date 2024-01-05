const cheeseSeed = require('./cheeseSeed');
const toppingsSeed = require('./toppingsSeed');
const menuSeed = require('./menuSeed');
const orderSeed = require('./orderSeed');
const cartSeed = require('./cartSeed');
const userSeed = require('./userSeed');
const connectDB = require('../db/index');

async function deleteCollections() {
  let db
  try {

    db = await connectDB();
    const collections = Object.keys(db.collections);
  
    for (const collectionName of collections) {
      await db.collections[collectionName].deleteMany({});
      console.log(`Deleted all documents from collection: ${collectionName}`);
    }
  
    console.log('All collections are empty.');
  } catch (error) {
    console.error('Error deleting collections:', error);
  }
}

async function seed() {
  try {
    await deleteCollections();
    
    // Seed orders first
    const orders = await orderSeed(); // Ensure orderSeed returns the created orders array
    
    // Then seed carts and users
    const carts = await cartSeed(orders);
    await userSeed(carts);
    
    // Seed other collections
    await cheeseSeed();
    await toppingsSeed();
    await menuSeed();
    

  } catch (error) {
    console.error('Error seeding data:', error);
  } finally {
    if (db) {
       db.close();
    }
    }
}

seed();