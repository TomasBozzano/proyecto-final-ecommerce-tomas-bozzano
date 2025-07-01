import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/products.routes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use('/api', productsRouter);

app.listen(PORT, () => {
  console.log(`Server ${PORT}`);
});