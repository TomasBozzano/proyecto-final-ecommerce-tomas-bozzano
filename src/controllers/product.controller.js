import * as productService from '../services/product.service.js';

//crear un producto
export const createProduct = async (req, res) => {
    if (!req.session.token) return res.status(401).json({ message: 'Inicie sesión' });

    if (req.session.role != "admin") return res.status(401).json({ message: 'No autorizado' });

    try {
        const productData = req.body;
        const newProduct = await productService.addProduct(productData);
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Obtener todos los productos
export const getProducts = async (req, res) => {
    try {
        const products = await productService.getProducts();
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Obtener un producto por ID
export const getProductById = async (req, res) => {

    try {
        const productId = req.params.id;
        const product = await productService.getProductById(productId);
        if (!product) {
            return res.status(404).json({ message: 'Producto no encontrado' });
        }
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Actualizar un producto por ID
export const updateProduct = async (req, res) => {

    if (!req.session.token) return res.status(401).json({ message: 'Inicie sesión' });

    if (req.session.role != "admin") return res.status(401).json({ message: 'No autorizado' });

    try {
        const productId = req.params.id;
        const updatedProductData = req.body;
        const updatedProduct = await productService.updateProduct(productId, updatedProductData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Eliminar un producto por ID
export const deleteProduct = async (req, res) => {

    if (!req.session.token) return res.status(401).json({ message: 'Inicie sesión' });

    if (req.session.role != "admin") return res.status(401).json({ message: 'No autorizado' });

    try {
        const productId = req.params.id;
        const response = await productService.deleteProduct(productId);
        res.status(200).json(response);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Actualizar parcialmente un producto por ID
export const updateProductParcial = async (req, res) => {

    if (!req.session.token) return res.status(401).json({ message: 'Inicie sesión' });

    if (req.session.role != "admin") return res.status(401).json({ message: 'No autorizado' });

    try {
        const productId = req.params.id;
        const updatedProductData = req.body;
        const updatedProduct = await productService.updateProductParcial(productId, updatedProductData);
        res.status(200).json(updatedProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//Filtrar productos por categoria o por nombre con query params
export const filterProducts = async (req, res) => {
    try {
        const { category, name } = req.query;
        const products = await productService.filterProducts(category, name);
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}