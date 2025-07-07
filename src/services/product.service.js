import * as product from '../models/products.model.js';

//Agregar un producto
export const addProduct = async (productData) => {
    try {
        const newProduct = await product.addProduct(productData);
        return newProduct;
    } catch (error) {
        throw new Error(error.message || 'Error al agregar el producto');
    }
}

//Obtener todos los productos
export const getProducts = async () => {
    try {
        const products = await product.getProducts();
        return products;
    } catch (error) {
        throw new Error(error.message || 'Error al obtener los productos');
    }
}

//Eliminar un producto
export const deleteProduct = async (productId) => {
    try {
        const response = await product.deleteProduct(productId);
        return response;
    } catch (error) {
        throw new Error(error.message || 'Error al eliminar el producto');
    }
}

//Actualizar un producto
export const updateProduct = async (productId, updatedProduct) => {
    try {
        const productUpdated = await product.updateProduct(productId, updatedProduct);
        return productUpdated;
    } catch (error) {
        throw new Error(error.message || 'Error al actualizar el producto');
    }
}

//Actualizar parcialmente un producto
export const updateProductParcial = async (productId, updatedProduct) => {
    try {
        const productUpdated = await product.updateProductParcial(productId, updatedProduct);
        return productUpdated;
    } catch (error) {
        throw new Error(error.message || 'Error al actualizar parcialmente el producto');
    }
}

//Obtener un producto por ID
export const getProductById = async (productId) => {
    try {
        const productData = await product.getProductById(productId);
        return productData;
    } catch (error) {
        throw new Error(error.message || 'Error al obtener el producto por ID');
    }
}

//Filtrar productos por categoría o nombre
export const filterProducts = async (category, name) => {
    try {
        const filteredProducts = await product.filterProducts(category, name);
        return filteredProducts;
    } catch (error) {
        throw new Error(error.message || 'Error al filtrar los productos');
    }
}
