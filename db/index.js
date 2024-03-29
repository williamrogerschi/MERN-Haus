// const mongoose = require('mongoose')
// mongoose
//     .connect('mongodb://127.0.0.1:27017/mernHausDatabase')
//     .then(() => {
//         console.log('Successfully connected to MongoDB.')
//     })
//     .catch(e => {
//         console.error('Connection error', e.message)
//     })
// const db = mongoose.connection
// module.exports = db


const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    const dbName = 'mernHausDatabase'
    const uri = `mongodb+srv://williamrogerschi:Jukath00n1990!@pizzahaus.uynbwsf.mongodb.net/${dbName}?retryWrites=true&w=majority`

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    console.log('Successfully connected to MongoDB.')

    return mongoose.connection
  } catch (error) {
    console.error('Connection error', error.message)
    throw error
  }
}

module.exports = connectDB