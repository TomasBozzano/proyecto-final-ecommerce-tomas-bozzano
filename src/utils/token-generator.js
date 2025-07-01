import jwt from 'jsonwebtoken';

const secret_key = process.env.JWT_SECRET_KEY

export const generateToken = (user) => {

    // validacióp de usuario
    const payload = {
        id: user.id,
        email: user.email,
        role: user.role
    };

    // Generación del token
    // El token tiene una validez de 1 hora
    return jwt.sign(payload, secret_key, { expiresIn: '1h' });
}