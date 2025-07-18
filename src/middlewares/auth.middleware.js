export const auth = (req, res, next) => {
    if (!req.session.token) {
        return res.status(401).json({ message: 'Inicie sesión' });
    }
    if (req.session.role !== "admin") {
        return res.status(403).json({ message: 'No autorizado' });
    }
    next();
}