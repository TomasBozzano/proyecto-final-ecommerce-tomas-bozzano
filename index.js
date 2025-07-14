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

// Endpoint para servir el JSON de Swagger
app.get('/api-docs/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpec);
});

// Rutas principales
app.use('/auth', authRouter);
app.use('/api/v1', productsRouter);

// Exportar como handler para Vercel
export const handler = serverless(app);


/*pp.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}*/