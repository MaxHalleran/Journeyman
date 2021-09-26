var jwt = require('jsonwebtoken');
var secret = process.env.TOKEN_SECRET || 'secret';
var withAuth = function (req, res, next) {
    var token = req.cookies.token;
    if (!token) {
        res.status(401).send('Unauthorized: No token provided');
    }
    else {
        jwt.verify(token, secret, function (err, decoded) {
            if (err) {
                res.status(401).send('Unauthorized: Invalid token');
            }
            else {
                req.email = decoded.email;
                next();
            }
        });
    }
};
module.exports = withAuth;
