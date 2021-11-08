import jwt from 'jsonwebtoken';
var authMiddleware = {
    secret: process.env.TOKEN_SECRET || 'secret',
    authorize: function (req, res, next) {
        var token = req.cookies.token;
        if (!token) {
            res.status(401).send('Unauthorized: No token provided');
        }
        else {
            jwt.verify(token, this.secret, function (err, decoded) {
                console.log("TODO: ADD PROPER TYPING");
                if (err) {
                    res.status(401).send('Unauthorized: Invalid token');
                }
                else {
                    req.email = decoded.email;
                    next();
                }
            });
        }
    }
};
export default authMiddleware;
// const secret: string = process.env.TOKEN_SECRET || 'secret';
// const withAuth = function(req: RequestBody, res: Response, next: NextFunction) {
// 	const token = req.cookies.token;
// 	if (!token) {
// 		res.status(401).send('Unauthorized: No token provided');
// 	} else {
// 		jwt.verify(token, secret, function(err: any, decoded: any) {
// 		console.log("TODO: ADD PROPER TYPING");
// 		if (err) {
// 			res.status(401).send('Unauthorized: Invalid token');
// 		} else {
// 			req.email = decoded.email;
// 			next();
// 		}
// 		});
// 	}
// }
// export default withAuth;
