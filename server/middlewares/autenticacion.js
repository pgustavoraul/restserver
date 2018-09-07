const jwt = require('jsonwebtoken');

//=====================
// Verificar token
//=====================

let verificarToken = (req, res, next) => {
    let token = req.get('token');

    jwt.verify(token, process.env.SEED, (err, decoded) => {

        if (err) {
            return res.status(401).json({
                ok: false,
                err: {
                    message: 'Token no válido'
                }
            });
        }

        req.usuario = decoded.usuario;
        next();

    })

};

//=====================
// Verifica AdminRole
//=====================

let verificaAdmin_Role = (req, res, next) => {

    let usuario = req.usuario;

    if (usuario.role === 'ADMIN_ROLE') {
        next();
    } else {
        return res.json({
            ok: false,
            err: {
                message: 'El role no es valido para esta función'
            }
        });
    }
};



module.exports = {
    verificarToken,
    verificaAdmin_Role
}
