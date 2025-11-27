import { db } from './firebase-admin.model.js';

// const productsCollection = collection(db, 'products');
const productsCollection = db.collection('products');

// Función para obtener todos los productos
export const getProducts = async () => {

    try {
        const dataBD = await productsCollection.get();
        const products = [];
        dataBD.forEach((doc) => {
            console.log('Producto: ', doc.data());
            products.push({ id: doc.id, ...doc.data() });
        });
        return products;
    } catch (error) {
        throw new Error('Error al obtener los productos');
    }
}

// Función para eliminar un producto por ID
export const deleteProduct = async (productId) => {

    if (!productId) {
        throw new Error('ID de producto es requerido');
    }

    try {
        await productsCollection.doc(productId).delete();
        return { message: 'Producto eliminado exitosamente' };
    } catch (error) {
        throw new Error('Error al eliminar el producto');
    }
}
// Función para actualizar un producto por ID
export const updateProduct = async (productId, updatedProduct) => {
    const { name, price, description, sku, stock, category } = updatedProduct;
    //product parcial o total con datos
    const productUpdated = await productsCollection.doc(productId).get();
    if (!productUpdated.exists) {
        throw new Error('Producto no encontrado');
    }

    if (!name || !price || !description || !sku || !stock || !category) {
        throw new Error('Todos los campos son obligatorios');
    }

    try {
        const productDoc = productsCollection.doc(productId);
        await productDoc.update(updatedProduct);
        return { id: productId, ...updatedProduct };
    } catch (error) {
        throw new Error('Error al actualizar el producto');
    }
}

// Función para actualizar parcialmente un producto por ID
export const updateProductParcial = async (productId, updatedProduct) => {
    const productUpdated = await productsCollection.doc(productId).get();
    if (!productUpdated) {
        throw new Error('Producto no encontrado');
    }

    // Actualizar solo los campos que se proporcionan
    Object.keys(updatedProduct).forEach(key => {
        if (updatedProduct[key] !== undefined) {
            productUpdated[key] = updatedProduct[key];
        }
    });

    try {
        const productDoc = productsCollection.doc(productId);
        await productDoc.update(updatedProduct);
        return { id: productId, ...updatedProduct };
    } catch (error) {
        throw new Error('Error al actualizar parcialmente el producto');
    }
}

// Función para obtener un producto por ID
export const getProductById = async (productId) => {

    if (!productId) {
        throw new Error('ID de producto es requerido');
    }

    try {
        const productDoc = await productsCollection.doc(productId).get();
        if (productDoc.exists) {
            return productDoc.data();
        }
    } catch (error) {
        throw new Error('Error al obtener el producto');
    }
}

// Función para agregar un producto
export const addProduct = async (product) => {
    const { name, price, description, sku, stock, category } = product;

    if (!name || !price || !description || !sku || !stock || !category) {
        throw new Error('Todos los campos son obligatorios');
    }

    try {
        const documents = await productsCollection.get();
        const nextID = documents.size + 1;
        console.log('Agregando producto:', product);
        console.log('Proximo ID:', nextID);
        const docRef = productsCollection.doc(nextID.toString());
        await docRef.set(product);
        return {
            id: nextID,
            ...product
        };
    } catch (error) {
        throw new Error('Error al agregar el producto');
    }
}

// Función para filtrar productos por categoría o nombre
export const filterProducts = async (category, name) => {
    if (!category && !name) {
        throw new Error('Debe proporcionar al menos una categoría o nombre para filtrar');
    }
    try {
        const dataBD = await productsCollection.get();
        const products = [];
        dataBD.forEach((doc) => {
            const {category: productCategory, name: productName} = doc.data();
            // category y name pasarlos a minusculas para comparar
            if (category && productCategory.toLowerCase() === category.toLowerCase()) {
                products.push({ id: doc.id, ...doc.data() });
            } else if (name && productName.toLowerCase().includes(name.toLowerCase())) {
                products.push({ id: doc.id, ...doc.data() });
            }
        });
        return products;
    } catch (error) {
        throw new Error('Error al filtrar los productos');
    }
}