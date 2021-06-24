import mongoose from 'mongoose'


const connectDB = async () => {
    try {
      const conn = await mongoose.connect('mongodb+srv://aviral:***Aviral21@ecom.rsgxk.mongodb.net/digicatalog?retryWrites=true&w=majority', {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      })
  
      console.log(`MongoDB Connected: ${conn.connection.host}`)
    } catch (error) {
      console.error(`Error: ${error.message}`)
      process.exit(1)
    }
  }
  
  export default connectDB