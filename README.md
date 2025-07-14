# 🛠️ Proyecto Backend - Node.js API REST

Este es un proyecto backend desarrollado con **Node.js**, **Express**, **Firebase** y **JWT**. Proporciona una API REST para el manejo de autenticación y productos, con documentación Swagger integrada.

## 🛠️ Tecnologías utilizadas 

- Node.js

- Express.js

- Firebase Admin SDK

- JSON Web Tokens (JWT)

- Swagger (swagger-jsdoc + swagger-ui-express)

---

## 📦 Requisitos

- [Node.js](https://nodejs.org/) >= 16.x
- [npm](https://www.npmjs.com/) >= 8.x

---

## 🚀 Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/tomasbozzano/.git
cd tu-repositorio
```

## 📦 Instalación dependencias
```bash
npm i
```

## Configuración de Firebase

- FIREBASE_API_KEY
- FIREBASE_AUTH_DOMAIN
- FIREBASE_PROJECT_ID
- FIREBASE_STORAGE_BUCKET
- FIREBASE_MESSAGING_SENDER_ID
- FIREBASE_APP_ID
- FIREBASE_MEASUREMENT_ID

## Configuración de JWT
- JWT_SECRET_KEY
- SECRET_KEY

## Puerto del servidor
PORT=3000

## Estructura
```
📁 src/
├── 📁 controllers/
├── 📁 routes/
├── 📁 services/
├── 📁 models/
├── 📁 utils/
└── index.js
```

## Script

# Ejecuta el servidor en desarrollo con nodemon
npm run dev

# Ejecuta el servidor en producción
npm start

## acceso a swagger
http://localhost:3000/api-docs

## 🧷 Métodos de la API

```
POST /auth/login

POST /auth/logout

GET /products

GET /products/:id

GET /products/filter

POST /products

PUT /products/:id

DELETE /products/:id

PATCH /products/:id

```

## Objecto product

```json
{
    "id":"1",
    "description":"T-shirt Boca Juniors Oficial",
    "sku":"RBJO00200",
    "stock":5,
    "category":"Remeras",
    "name":"T-shirt Boca",
    "price":109.99}
```

## Objecto usuario

```json
{
    "username":"",
    "password":""
}
```

## Tipos de usuarios

- Admin tiene rol completo
- User tiene rol user, solo le permite busqueda (Aunque se dejo que las consultas sean sin restricción)

```json
{
    "username":"admin",
    "password":"admin123"
},
{
    "username":"user",
    "password":"user123"
}
```
