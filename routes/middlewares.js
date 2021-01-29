const checkToken = (req, res, next) => {

    if(req.headers['user-token']){
        return res.json({ error: 'Necesitas incluir el user-token en la cabecera' });
    }

    next();
}