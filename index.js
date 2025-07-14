import express from 'express';
import cors from 'cors';
import session from 'express-session';
import serverless from 'serverless-http';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from './src/utils/swagger.js';

import productsRouter from './src/routes/product.routes.js';
import authRouter from './src/routes/auth.routes.js';

const app = express();
const { SECRET_KEY } = process.env;

// Middlewares
app.use(cors());
app.use(express.json());
app.use(session({
  secret: SECRET_KEY,
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}));

// Swagger UI
app.use(
  '/api-docs',
  swaggerUI.serve,
  swaggerUI.setup(swaggerSpec, {
    explorer: true,
    swaggerOptions: {
      url: '/api-docs/swagger.json',
    },
  })
);

app.use('/auth', authRouter);
app.use('/api/v1', productsRouter);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});