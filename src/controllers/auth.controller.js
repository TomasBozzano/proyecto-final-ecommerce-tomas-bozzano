import { generateToken } from '../utils/token-generator.js';
import { users } from '../utils/auth.js';

export const login = async (req, res) => {
    const { username, password } = req.body;

    // Validar las credenciales

    if (!username || !password) return res.status(400).json({ message: 'Credenciales incompletas' });

    if (username != users.admin.username && username != users.user.username) return res.status(400).json({ message: 'Credenciales invalidas' });
    if (password != users.admin.password && password != users.user.password) return res.status(400).json({ message: 'Credenciales invalidas' });

    if (username === users.admin.username && password === users.admin.password) {
        req.session.role = 'admin';
    } else if (username === users.user.username && password === users.user.password) {
        req.session.role = 'user';
    }

    // Generar un token JWT
    const token = generateToken({ username });
    req.session.token = token; // Guardar el token en la sesión
    return res.status(200).json({ message: 'Inicio exitoso', token });
}

export const logout = (req, res) => {
    // eliminar con session destroy
    req.session.destroy((err) => {
        if (err) {
            return res.status(500).json({ message: 'Error al cerrar sesión' });
        }
    });
    return res.status(200).json({ message: 'Sesión cerrada exitosamente' });
}