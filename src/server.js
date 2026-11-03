const express = require('express');
const connectDB = require('./config/db');
const router = require('./routes/student.routes')
const dotenv = require('dotenv');

dotenv.config();


const app = express()
app.use(express.json());

const port = process.env.PORT

app.get('/', (req, res) => {
  res.json({ message: 'Hello World!' })
})

app.use('/api', router);


const startServer = async () => {
  try {
    await connectDB();


    app.listen(port, () => {
      console.log(`Example app listening http://localhost:${port}`)
    })

  }
  catch (error) {
    console.error("Error starting the server:", error);
    process.exit(1);
  }
}

startServer();