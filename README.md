# 🛠️ Proyecto Backend - Node.js API REST

Este es un proyecto backend desarrollado con **Node.js**, **Express**, **Firebase** y **JWT**. Proporciona una API REST para el manejo de autenticación y productos, con documentación Swagger integrada.

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

## Instala dependencias
```bash
npm i
```

# Configuración de Firebase
FIREBASE_API_KEY=""
FIREBASE_AUTH_DOMAIN=""
FIREBASE_PROJECT_ID=""
FIREBASE_STORAGE_BUCKET=""
FIREBASE_MESSAGING_SENDER_ID=""
FIREBASE_APP_ID=""
FIREBASE_MEASUREMENT_ID=""

# Configuración de JWT
JWT_SECRET_KEY=""
SECRET_KEY=""

# Puerto del servidor
PORT=3000

## Estructura

📁 src/
├── 📁 controllers/
├── 📁 routes/
├── 📁 services/
├── 📁 models/
├── 📁 utils/
└── index.js

## Script

# Ejecuta el servidor en desarrollo con nodemon
npm run dev

# Ejecuta el servidor en producción
npm start

## acceso a swagger
http://localhost:3000/api-docs
