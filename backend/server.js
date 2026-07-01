import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectdb from './config/mongodb.js';
import connectCloudinary from './config/cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js';

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use('/api/user', userRouter);
app.use('/api/product', productRouter);

app.get('/', (req, res) => {
  res.send('API WORKING');
});

const startServer = async () => {
  try {
    await connectdb();
    connectCloudinary();
    app.listen(port, () => console.log('Server start on PORT: ' + port));
  } catch (error) {
    console.log('Server failed to start:', error.message);
  }
};

startServer();
