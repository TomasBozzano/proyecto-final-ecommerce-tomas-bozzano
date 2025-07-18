import express from 'express';
import {
  getProducts,
  filterProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  updateProductParcial
} from '../controllers/product.controller.js';
import { auth } from '../middlewares/auth.middleware.js';

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: API para manejar productos en el e-commerce
 */

router

  /**
   * @swagger
   * /api/products:
   *   get:
   *     tags: [Products]
   *     summary: Obtener todos los productos
   *     description: Retorna una lista de todos los productos.
   *     responses:
   *       200:
   *         description: Lista de productos.
   *         content:
   *           application/json:
   *             schema:
   *               type: array
   *               items:
   *                 type: object
   *       404:
   *         description: No se encontraron productos
   */
  .get('/products', getProducts)


/**
 * @swagger
 * /api/products/filter:
 *   get:
 *     tags: [Products]
 *     summary: Obtener productos filtrados
 *     description: Retorna una lista de productos que coinciden con los filtros aplicados.
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         required: false
 *         description: Categoría del producto
 *       - in: query
 *         name: name
 *         schema:
 *           type: string
 *         required: false
 *         description: Nombre del producto o parte del nombre
 *     responses:
 *       200:
 *         description: Lista de productos filtrados.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *       404:
 *         description: No se encontraron productos que coincidan con los filtros.
 */
.get('/products/filter', filterProducts)


  /**
   * @swagger
   * /api/products/{id}:
   *   get:
   *     tags: [Products]
   *     summary: Obtener un producto por ID
   *     description: Retorna un solo producto dado su ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID del producto
   *     responses:
   *       200:
   *         description: Producto encontrado
   *       404:
   *         description: Producto no encontrado
   */
  .get('/products/:id', getProductById)

  /**
 * @swagger
 * /api/products:
 *   post:
 *     tags: [Products]
 *     summary: Crear un nuevo producto
 *     description: Crea un nuevo producto con los datos proporcionados.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               stock:
 *                 type: number
 *               category:
 *                 type: string
 *               sku:
 *                 type: string
 *     responses:
 *       201:
 *         description: Producto creado exitosamente
 *       400:
 *         description: Datos inválidos
 */
.post('/products', auth, createProduct)


/**
 * @swagger
 * /api/products/{id}:
 *   put:
 *     tags: [Products]
 *     summary: Actualizar un producto por ID
 *     description: Actualiza todos los campos de un producto existente.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del producto
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               stock:
 *                 type: number
 *               category:
 *                 type: string
 *               sku:
 *                 type: string
 *     responses:
 *       200:
 *         description: Producto actualizado exitosamente
 *       404:
 *         description: Producto no encontrado
 */
.put('/products/:id', auth, updateProduct)


  /**
   * @swagger
   * /api/products/{id}:
   *   delete:
   *     tags: [Products]
   *     summary: Eliminar un producto por ID
   *     description: Elimina un producto específico dado su ID.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID del producto
   *     responses:
   *       200:
   *         description: Producto eliminado exitosamente
   *       404:
   *         description: Producto no encontrado
   */
  .delete('/products/:id', auth, deleteProduct)

  /**
   * @swagger
   * /api/products/{id}:
   *   patch:
   *     tags: [Products]
   *     summary: Actualización parcial de un producto
   *     description: Actualiza uno o más campos de un producto existente.
   *     parameters:
   *       - in: path
   *         name: id
   *         required: true
   *         schema:
   *           type: string
   *         description: ID del producto
   *     requestBody:
   *       required: true
   *       content:
   *         application/json:
   *           schema:
   *             type: object
   *             example:
   *               price: 99.99
   *     responses:
   *       200:
   *         description: Producto actualizado parcialmente
   *       404:
   *         description: Producto no encontrado
   */
  .patch('/products/:id', auth, updateProductParcial);

export default router;
