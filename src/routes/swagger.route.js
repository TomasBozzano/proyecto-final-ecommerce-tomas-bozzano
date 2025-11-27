import express from 'express';
import swaggerSpec from '../utils/swagger.js';

const swaggerRouter = express.Router();

swaggerRouter
.get('/', (req, res) => {
  return res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>API Docs</title>

        <!-- Swagger UI CSS desde CDN -->
        <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist/swagger-ui.css" />
      </head>
      <body>
        <div id="swagger"></div>

        <!-- Swagger UI JS desde CDN -->
        <script src="https://unpkg.com/swagger-ui-dist/swagger-ui-bundle.js"></script>

        <script>
          window.onload = () => {
            SwaggerUIBundle({
              spec: ${JSON.stringify(swaggerSpec)},
              dom_id: "#swagger"
            });
          };
        </script>
      </body>
    </html>
  `);
});

export default swaggerRouter;