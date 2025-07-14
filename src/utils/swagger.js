import swaggerJSDoc from "swagger-jsdoc";

const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "E-commerce API",
            version: "1.0.0",
            description: "API para manejo de un e-commerce",
            contact: {
                name: "Tomas Bozzano"
            }

        },
        servers: [
            {
                url: "http://localhost:3000",
                description: "Servidor de desarrollo"
            },
            {
                url: "https://api.ecommerce.com",
                description: "Servidor de producción"
            }
        ]
    },
    apis: ['./src/routes/*routes.js']
};
const swaggerSpec = swaggerJSDoc(options);
export default swaggerSpec;