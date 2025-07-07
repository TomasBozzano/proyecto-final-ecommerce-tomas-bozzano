import express from 'express';
import { getProducts, getProductById, createProduct, updateProduct, deleteProduct, updateProductParcial } from '../controllers/product.controller.js';

const router = express.Router();

// Ruta para obtener todos los productos
router
.get('/', getProducts)
// Ruta para obtener un producto por ID
.get('/:id', getProductById)
// Ruta para crear un nuevo producto
.post('/', createProduct)
// Ruta para actualizar un producto por ID
.put('/:id', updateProduct)
// Ruta para eliminar un producto por ID
.delete('/:id', deleteProduct)
// Ruta para actualizar parcialmente un producto por ID
.patch('/:id', updateProductParcial)

export default router;

