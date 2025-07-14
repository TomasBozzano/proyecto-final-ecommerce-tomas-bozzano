import express from 'express';
import cors from 'cors';
import productsRouter from './src/routes/product.routes.js';
import authRouter from './src/routes/auth.routes.js';
import session from 'express-session';
import swaggerSpec from './src/utils/swagger.js';
import swaggerUI from 'swagger-ui-express';

const app = express();
const {PORT , SECRET_KEY} = process.env;

app.use(cors());
app.use(session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));
app.use(express.json());

app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.use('/auth', authRouter)
app.use('/api/v1', productsRouter);

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT}/api-docs`);
});