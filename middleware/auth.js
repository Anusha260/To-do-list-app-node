const jwt = require('jsonwebtoken')
const config = require('config');

module.exports = function(req, res, next) {
    // GET token from header
    const token = req.header('X-Auth-Token');
    // check if not token
    if (!token) {
        res.status(401).json({ msg: 'NO token,authorization denied' })
        return;
    }
    // Verify token
    try {
        const decoded = jwt.verify(token, config.get('jwtSecret'))
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(481).json({ msg: 'token is not valid' })
    }
}